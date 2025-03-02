'use client'
import Image from "next/image";
import Tag from "../../shared/Tag/Tag";

interface CardPetProps {
    name: string;
    description: string;
    tags: string[];
    imgSrc: string
}
export default function CardPet({ name, description, tags, imgSrc }: CardPetProps) {
    return (
        <div className="border border-secondary rounded-2xl flex flex-col gap-2 max-w-80">
            <Image
                src={imgSrc}
                alt={name}
                width={400}
                height={400}
                className="rounded-t-2xl"
            />

            <div className="p-4">
                <span>Moacir</span>
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
