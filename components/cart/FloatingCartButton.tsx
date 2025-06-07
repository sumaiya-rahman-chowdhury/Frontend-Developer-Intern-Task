"use client";

import { useCart } from "@/context/CartContext";
import CartButton from "./CartButton";
import { FaShoppingCart } from "react-icons/fa";

export default function FloatingCartIcon() {
  const { cartLength } = useCart();
  return (
    <div className="fixed top-1/2 right-2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-1 z-50 block md:hidden">
      <CartButton
        count={cartLength}
        icon={<FaShoppingCart className="text-black text-2xl" />}
      />
    </div>
  );
}
