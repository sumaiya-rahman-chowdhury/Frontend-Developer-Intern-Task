"use client";
import { ShoppingBag, Users, Headphones, AlignLeft } from "lucide-react";
import { useState } from "react";
import CategoriesSidebar from "./CategoriesSidebar";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function MobileNavbar() {
  const router = useRouter();
  const [view, setView] = useState(false);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-t  px-4 py-2 md:hidden
    "
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center space-x-4 gap-5">
          <div className="flex flex-col items-center text-sm">
            <button onClick={() => setView(!view)} className="">
              <AlignLeft className="w-6 h-6" />
              <span className="text-[10px]">Menu</span>
            </button>
          </div>

          <button
            onClick={() => router.push("/collections")}
            className="flex flex-col items-center text-sm"
          >
            <ShoppingBag className="w-6 h-6 mb-1" />
            <span className="text-[10px]">Shop</span>
          </button>
        </div>

        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
          <button
            onClick={() => router.push("/")}
            className=" text-white rounded-full p-3"
          >
            <FaHome className="w-6 h-6 text-pink-700" />
          </button>
        </div>

        <div className="flex justify-between items-center space-x-4 gap-5">
          <button
            onClick={() => router.push("/about")}
            className="flex flex-col items-center text-sm"
          >
            <Users className="w-6 h-6" />
            <span className="text-[10px]">About Us</span>
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="flex flex-col items-center text-sm"
          >
            <Headphones className="w-6 h-6" />
            <span className="text-[10px]">Contact</span>
          </button>
        </div>
        <CategoriesSidebar open={view} onClose={() => setView(false)} />
      </div>
    </nav>
  );
}
