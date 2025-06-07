"use client";

import { useState } from "react";
import { ProductCardProps } from "../ui/cards/ProductCard";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";
import ProductFooter from "./ProductFooter";
import ProductQuantity from "./ProductQuantity";

function ProductDetails({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="font-bold space-y-5">
      <h1 className="text-2xl md:text-4xl ">{product.name}</h1>
      <StarRating />
      <h2 className="text-xl md:text-3xl ">৳{product.price}</h2>
      <p className="text-gray-400">Category: {product.category.name}</p>
      <ProductQuantity
        quantity={quantity}
        onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
        onIncrease={() => setQuantity((q) => q + 1)}
      />
      <button
        className="bg-pink-800 text-white w-full py-2 rounded-sm"
        onClick={() =>
          addToCart({
            ...product,
            quantity,
          })
        }
      >
        অর্ডার করুন
      </button>
      <ProductFooter />
    </div>
  );
}

export default ProductDetails;
