'use client'

import { MENU } from "@/core/constants/menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import CartSidebar from "../../shared/CartSidebar/CartSidebar";

export default function HeaderMenu() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems } = useCart();

    return (
        <div className="flex justify-between items-center py-4 border-b-2 border-lower">
            <div className="flex items-center gap-4">
                {MENU.map((item) => (
                    <Link key={item.href} className="block hover:opacity-80" href={item.href}>{item.label}</Link>
                ))}
            </div>

            <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-4 cursor-pointer hover:opacity-80"
            >
                <span className="block">Cesto ({cartItems.length})</span>
                <i className="mb-2">
                    <Image
                        src="/images/CestoIcon.svg"
                        alt="Cesto"
                        width={30}
                        height={30}
                    />
                </i>
            </button>

            <CartSidebar 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </div>
    );
}