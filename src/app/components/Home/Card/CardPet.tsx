'use client'

import Image from "next/image";
import Tag from "../../shared/Tag/Tag";

interface CardPetProps {
    name: string;
    description: string;
    tags: string[];
    image: string
}

export default function CardPet({ name, description, tags, image }: CardPetProps) {

    return (
        <div className="border border-secondary rounded-2xl flex flex-col gap-2 max-w-80">
            <Image
                src={image}
                alt={name}
                width={400}
                height={200}
                objectFit="cover"
                className="rounded-t-2xl max-h-52 object-cover"
            />

            <div className="p-4 grow">
                <span>{name}</span>
                <p className="text-secondary text-wrap max-w-96 text-[12px]">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap gap-2 p-4">
                {tags.map((tag) => (
                    <Tag key={tag} value={tag} />
                ))}
            </div>
            <button className="text-background bg-primary rounded-b-2xl p-4 hover:opacity-80 cursor-pointer" onClick={() => console.log('dale')}> Adicionar ao Cesto</button>
        </div>
    )
}
