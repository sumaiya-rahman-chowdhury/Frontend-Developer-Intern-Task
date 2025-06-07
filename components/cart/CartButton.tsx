"use client";

import ShoppingCartSidebar from "./CartSidebar";
import { useCart } from "@/context/CartContext";
import { ReactNode } from "react";

type CartButtonProps = {
  count: number;
  icon: ReactNode;
};

export default function CartButton({ count, icon }: CartButtonProps) {
  // const [open, setOpen] = useState(false);
  const { toggleCart } = useCart();

  return (
    <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer">
      <button onClick={() => toggleCart(true)}>
        {icon}
        {count > 0 && (
          <div className="relative ">
            <span className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-[rgb(196,56,130)] animate-ping opacity-75"></span>

            <span className="absolute -bottom-2 -right-2 bg-[rgb(196,56,130)] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          </div>
        )}
      </button>
      <ShoppingCartSidebar />
    </div>
  );
}
