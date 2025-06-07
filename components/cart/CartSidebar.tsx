"use client";
import { useCart } from "@/context/CartContext";
import { X, ArrowRight } from "lucide-react";
import React from "react";
import ShoppingItems from "../checkout/ShoppingItems";
import { useRouter } from "next/navigation";

export default function ShoppingCartSidebar() {
  const { cart, subtotal, isCartOpen, toggleCart, clearCart } = useCart();
  const router = useRouter();
  return (
    <aside
      className={`fixed  right-0 top-0 overflow-hidden  h-full bg-black/40 shadow-lg z-50 flex flex-col transition-all duration-300
    ${isCartOpen ? "w-full" : "w-0 opacity-0"}
    `}
    >
      <div
        className={`fixed right-0 top-0 overflow-hidden  h-full bg-white shadow-lg z-50 flex flex-col transition-all duration-300
    ${isCartOpen ? "max-w-[400px]" : "w-0"}
    `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 m-5 bg-gray-100 ">
          <h2 className="text-sm font-semibold">Shopping Cart</h2>
          <button onClick={() => toggleCart(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="flex-1 overflow-y-auto px-4 py-2">
            {cart.length === 0 ? (
              <p className="text-sm text-gray-400 text-center mt-10">
                No items in cart
              </p>
            ) : (
              <div className="space-y-2">
                <ShoppingItems />
              </div>
            )}
          </div>
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between mb-4 text-sm font-semibold">
            <span>Subtotal:</span>
            <span>৳ {subtotal}</span>
          </div>
          <div className="flex gap-3">
            <button
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-sm font-medium px-3 py-2 rounded"
              onClick={clearCart}
            >
              Clear All
            </button>
            <button
              className="flex-1 bg-pink-400 hover:bg-pink-500 text-white text-sm font-medium px-3 py-2 rounded flex items-center justify-center gap-1"
              onClick={() => router.push("/checkout")}
            >
              Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
