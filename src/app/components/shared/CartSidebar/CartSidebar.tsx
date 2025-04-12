'use client'

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { cartItems, removeFromCart } = useCart();

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} ${!isOpen ? 'pointer-events-none' : ''}`}
                onClick={onClose}
            />
            <div className={`fixed right-0 top-0 h-full w-96 bg-white/80 backdrop-blur-sm z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    <div className="bg-orange-100 p-4">
                        <h2 className="text-xl font-bold text-primary text-center">Cesto</h2>
                    </div>

                    <div className="flex-1 overflow-auto">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500 my-4">Seu cesto está vazio</p>
                        ) : (
                            <div className="divide-y divide-orange-200">
                                {cartItems.map((pet) => (
                                    <div key={pet._id} className="flex items-center gap-4 p-4 hover:bg-orange-50">
                                        <Image
                                            src={pet.photo}
                                            alt={pet.name}
                                            width={60}
                                            height={60}
                                            className="rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-primary">{pet.name}</h3>
                                            <p className="text-sm text-secondary line-clamp-2">Brincalhão, amigo, adoro passear, vacinas em dia</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(pet._id)}
                                            className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-80"
                                        >
                                            <span>Deixar</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <button 
                            onClick={onClose}
                            className="w-full bg-red-600 text-white p-4 hover:opacity-90 text-center font-medium"
                        >
                            Levar Todos
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}