'use client'

import { base64ToImage } from "@/core/utils/base64ToImage";
import CardPet from "../Card/CardPet";
import { IListarCachorrosResponse } from "@/core/api/interfaces/responses/IListarCachorrosResponse";

interface CardListProps {
    pets: IListarCachorrosResponse[]
}

export default function CardList({ pets }: CardListProps) {
    if (!pets.length) {
        return (
            <section className="flex items-center justify-center h-[400px]">
                <p className="text-lg text-gray-500">Nenhum pet cadastrado</p>
            </section>
        )
    }

    return (
        <section className="flex flex-wrap gap-8 justify-between">
            {pets.map(pet => (
                <CardPet
                    key={pet._id}
                    id={pet._id}
                    name={pet.name}
                    description={pet.description}
                    tags={pet.tags}
                    image={base64ToImage(pet.photo)}
                    size={pet.size}
                    gender={pet.gender}
                    color={pet.color}
                    race={pet.race}
                    isadopted={pet.isadopted}
                />
            ))}
        </section>
    )
}