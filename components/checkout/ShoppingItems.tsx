"use client";
import React from "react";
import QuantitySelector from "../product/QuantitySelector";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

function ShoppingItems() {
  const { cart } = useCart();
  // console.log(cart);
  return (
    <>
      {cart.map((item) => (
        <div
          key={item._id}
          className="flex  items-center gap-2  justify-between border-b py-5 border-gray-500"
        >
          <div className="relative w-25 h-30">
            <Image alt="" src={item.images[0].optimizeUrl} fill />
          </div>
          <div className="text-pink-600">
            <h2>{item.name}</h2>
            <div className="flex  items-center gap-5">
              <div className="">
                <p className="line-through text-gray-500">৳{item.price}</p>
                <p className="">৳{item.price}</p>
                <p>৳{Number(item.price) * item.quantity}</p>
              </div>
              <p className="text-black text-sm">X</p>
              <QuantitySelector item={item} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShoppingItems;
