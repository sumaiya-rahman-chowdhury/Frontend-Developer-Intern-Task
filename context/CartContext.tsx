"use client";
import { ProductCardType } from "@/components/ui/cards/ProductCard";
import React, { createContext, useContext, useEffect, useState } from "react";
type CartItem = ProductCardType & {
  quantity: number;
};
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  subtotal: number;
  isCartOpen: boolean;
  toggleCart: (open: boolean) => void;
  updateQuantity: (id: string, delta: number) => void;
  cartLength: number;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    const cart = cartString ? JSON.parse(cartString) : [];
    setCartLength(cart.length);
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      // console.log(existing);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
    console.log(item);
  };
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const updated = prev
        .map((item) =>
          item._id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0); // optional: remove if 0
      return updated;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        subtotal,
        isCartOpen,
        toggleCart: setIsCartOpen,
        updateQuantity,
        cartLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
