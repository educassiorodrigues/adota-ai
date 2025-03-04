import Button from "../components/shared/Button/Button";
import Input from "../components/shared/Input/Input";
import TextArea from "../components/shared/TextArea/TextArea";

export default async function Cadastro() {
    return (
        <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-2xl text-secondary">Cadastro de PET</h3>
            <h3 className="text-2xl text-primary mb-8">Você deverá passar informações sobre o PET a ser adotado.</h3>

            <form className="grid grid-cols-3 gap-6">
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Nome do PET"
                />
                <Input
                    label="Cor"
                    type="text"
                    placeholder="Nome do PET"
                />
                <Input
                    label="Raça"
                    type="text"
                    placeholder="Nome do PET"
                />
                <Input
                    label="Sexo"
                    type="text"
                    placeholder="Nome do PET"
                />
                <Input
                    label="Tamanho"
                    type="text"
                    placeholder="Nome do PET"
                />
                <Input
                    label="Foto"
                    type="file"
                    placeholder="Nome do PET"
                />

                <TextArea
                    label="Observações"
                    placeholder="Observações sobre o PET"
                    groupClass={{ className: "col-span-full flex flex-col gap-2" }}
                />


                <div className="col-span-full flex flex-col gap-2">
                    <Input
                        label="Tags"
                        type="text"
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