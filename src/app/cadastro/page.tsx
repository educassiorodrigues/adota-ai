import { EGender } from "@/core/api/enums/EGender";
import { ESize } from "@/core/api/enums/ESize";
import { z } from "zod";
import Button from "../components/shared/Button/Button";
import Input from "../components/shared/Input/Input";
import Select from "../components/shared/Select/Select";
import TextArea from "../components/shared/TextArea/TextArea";
import { adicionarPetAction } from "./actions";
import { getByEnum } from "@/core/utils/getByEnumType";

const formDataObject = z.object({
    name: z.string(),
    color: z.string(),
    description: z.string(),
    race: z.string(),
    size: z.enum([ESize.P.toString(), ESize.M.toString(), ESize.G.toString(), ESize.GG.toString()]),
    gender: z.enum([EGender.Feminino.toString(), EGender.Masculino.toString()]),
    photo: z.instanceof(File)
})


export default async function Cadastro() {

    async function adicionarPet(formData: FormData) {
        'use server'
        const validatedFields = formDataObject.safeParse(
            Object.fromEntries(formData.entries())
        )

        if (!validatedFields.success) {
            console.log(validatedFields.error)
            return
        }

        const formParsed = formDataObject.parse(validatedFields.data)
        const buffer = Buffer.from(await formParsed.photo.arrayBuffer());
        const base64 = buffer.toString("base64");

        try{
            const response = await adicionarPetAction({
                color: formParsed.color,
                description: formParsed.description,
                name: formParsed.name,
                photo: base64,
                gender: getByEnum(formParsed.gender, EGender),
                race: formParsed.race,
                size: getByEnum(formParsed.size, ESize),
                tags: ['teste1', 'teste2'],
                isAdopted: false
            });
        }
        catch(err){
            console.log(err?.config.data)
        }
    }

    return (
        <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-2xl text-secondary">Cadastro de PET</h3>
            <h3 className="text-2xl text-primary mb-8">Você deverá passar informações sobre o PET a ser adotado.</h3>

            <form className="grid grid-cols-3 gap-6" action={adicionarPet}>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Nome do PET"
                    name="name"
                />
                <Input
                    label="Cor"
                    type="text"
                    placeholder="Cor do PET"
                    name="color"
                />
                <Input
                    label="Raça"
                    type="text"
                    placeholder="Raça do PET"
                    name="race"
                />

                <Select
                    label="Genero"
                    name="gender"
                    options={[
                        { value: EGender.Masculino.toString(), label: "Macho" },
                        { value: EGender.Feminino.toString(), label: "Femea" },
                    ]}
                />

                <Select
                    label="Tamanho"
                    name="size"
                    options={[
                        {
                            label: "Pequeno", value: ESize.P.toString()
                        },
                        {
                            label: "Médio", value: ESize.M.toString()
                        },
                        {
                            label: "Grande", value: ESize.G.toString()
                        },
                        {
                            label: "Gigante", value: ESize.GG.toString()
                        }
                    ]}
                />
                <Input
                    label="Foto"
                    type="file"
                    placeholder="Foto do PET"
                    name="photo"
                />

                <TextArea
                    label="Observações"
                    placeholder="Observações sobre o PET"
                    name="description"
                    groupClass={{ className: "col-span-full flex flex-col gap-2" }}
                />

                <div className="col-span-full flex flex-col gap-2">
                    <Input
                        label="Tags"
                        type="text"
                        name="tags"
                    />

                    <div className="flex justify-between">
                        <Button variant="secondary" label="Adicionar" />
                        <Button variant="primary" label="Concluir" />
                    </div>
                </div>
            </form>
        </div>
    )
}