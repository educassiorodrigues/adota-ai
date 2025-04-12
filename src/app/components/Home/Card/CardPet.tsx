'use client'

import Image from "next/image";
import Tag from "../../shared/Tag/Tag";
import { useCart } from "@/app/context/CartContext";

interface CardPetProps {
    id: string;
    name: string;
    description: string;
    tags: string[];
    image: string;
    size: number;
    gender: number;
    color: string;
    race: string;
    isadopted: boolean;
}

export default function CardPet({ id: _id, name, description, tags, image, size, gender, color, race, isadopted }: CardPetProps) {
    const { addToCart, removeFromCart, cartItems } = useCart();
    const isInCart = cartItems.some((cartItem) => cartItem._id === _id);

    const handleAddToCart = () => {
        if (!isInCart) {
            const pet = {
                _id,
                name,
                description,
                tags,
                photo: image,
                isadopted,
                size,
                gender,
                color,
                race
            };
            addToCart(pet);
        }
    };

    const handleRemoveFromCart = () => {
        removeFromCart(_id);
    };

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
                {tags.map((tag, index) => (
                    <Tag key={index} value={tag} />
                ))}
            </div>
            {isInCart ? (
                <button 
                    className="text-background bg-red-500 rounded-b-2xl p-4 hover:opacity-80 cursor-pointer"
                    onClick={handleRemoveFromCart}
                >
                    Remover do Cesto
                </button>
            ) : (
                <button 
                    className="text-background bg-primary rounded-b-2xl p-4 hover:opacity-80 cursor-pointer"
                    onClick={handleAddToCart}
                >
                    Adicionar ao Cesto
                </button>
            )}
        </div>
    )
}
