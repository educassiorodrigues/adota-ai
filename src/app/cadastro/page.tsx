'use client'

import { EGender } from "@/core/api/enums/EGender";
import { ESize } from "@/core/api/enums/ESize";
import Button from "../components/shared/Button/Button";
import Input from "../components/shared/Input/Input";
import Select from "../components/shared/Select/Select";
import TextArea from "../components/shared/TextArea/TextArea";
import { adicionarPetAction } from "./actions";
import { useState, useTransition } from "react";

export default function Cadastro() {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        name: '',
        color: '',
        description: '',
        race: '',
        size: '',
        gender: '',
        photo: null as File | null
    });

    const handleSubmit = async (formData: FormData) => {
        setError(null);
        setSuccess(false);
        startTransition(async () => {
            const result = await adicionarPetAction(formData);
            if (result?.error) {
                setError(result.error);
            } else {
                setSuccess(true);
                setFormData({
                    name: '',
                    color: '',
                    description: '',
                    race: '',
                    size: '',
                    gender: '',
                    photo: null
                });
            }
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            setFormData(prev => ({
                ...prev,
                [name]: file || null
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    return (
        <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-2xl text-secondary">Cadastro de PET</h3>
            <h3 className="text-2xl text-primary mb-8">Você deverá passar informações sobre o PET a ser adotado.</h3>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Pet adicionado com sucesso!
                </div>
            )}

            <form className="grid grid-cols-3 gap-6" action={handleSubmit}>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Nome do PET"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    label="Cor"
                    type="text"
                    placeholder="Cor do PET"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    required
                />
                <Input
                    label="Raça"
                    type="text"
                    placeholder="Raça do PET"
                    name="race"
                    value={formData.race}
                    onChange={handleInputChange}
                    required
                />

                <Select
                    label="Genero"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    options={[
                        { value: EGender.Masculino.toString(), label: "Macho" },
                        { value: EGender.Feminino.toString(), label: "Femea" },
                    ]}
                />

                <Select
                    label="Tamanho"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    required
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
                    onChange={handleInputChange}
                    required
                />

                <TextArea
                    label="Observações"
                    placeholder="Observações sobre o PET"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    groupClass={{ className: "col-span-full flex flex-col gap-2" }}
                />

                <div className="col-span-full flex flex-col gap-2">
                    <Input
                        label="Tags"
                        type="text"
                        name="tags"
                    />

                    <div className="flex justify-between">
                        <Button variant="secondary" label="Adicionar" disabled={isPending} />
                        <Button 
                            variant="primary" 
                            label={isPending ? "Enviando..." : "Concluir"} 
                            type="submit"
                            disabled={isPending}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}