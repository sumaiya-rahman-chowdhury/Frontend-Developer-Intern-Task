"use client";

import { useCart } from "@/context/CartContext";
import { ProductCardType } from "../ui/cards/ProductCard";

type QuantitySelectorProps = {
  item: ProductCardType & { quantity: number };
};

export default function QuantitySelector({ item }: QuantitySelectorProps) {
  const { updateQuantity } = useCart();

  return (
    <div className="flex items-center gap-1 border-1 rounded border-black text-black">
      <button
        className="ml-2 rounded hover:bg-gray-100"
        onClick={() => updateQuantity(item._id, -1)}
      >
        {` −`}
      </button>
      <span className="p-1 min-w-[40px] text-center bg-gray-300">
        {item.quantity}
      </span>
      <button
        className="mr-2 text-center rounded hover:bg-gray-100"
        onClick={() => updateQuantity(item._id, +1)}
      >
        {`+`}
      </button>
    </div>
  );
}
