'use server'

import { base64ToImage } from "@/core/utils/base64ToImage";
import CardPet from "../Card/CardPet";
import { IListarCachorrosResponse } from "@/core/api/interfaces/responses/IListarCachorrosResponse";

interface CardListProps {
    pets: IListarCachorrosResponse[]
}
export default async function CardList({ pets }: CardListProps) {
    return (
        <section className="flex flex-wrap gap-8 justify-between">
            {pets.map(pet => (
                <CardPet
                    key={pet.id}
                    name={pet.name}
                    description={pet.description}
                    tags={pet.tags}
                    image={base64ToImage(pet.photo) }
                />
            ))}
        </section>
    )
}