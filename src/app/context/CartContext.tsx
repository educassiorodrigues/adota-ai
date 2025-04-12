'use client'

import { IListarCachorrosResponse } from "@/core/api/interfaces/responses/IListarCachorrosResponse";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextProps {
    cartItems: IListarCachorrosResponse[];
    addToCart: (item: IListarCachorrosResponse) => void;
    removeFromCart: (_id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {}
});

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<IListarCachorrosResponse[]>([]);

    const addToCart = (item: IListarCachorrosResponse) => {
        setCartItems(prev => {
            const alreadyInCart = prev.some(cartItem => cartItem._id === item._id);
            if (alreadyInCart) {
                return prev;
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (_id: string) => {
        setCartItems(prev => prev.filter(item => item._id !== _id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}