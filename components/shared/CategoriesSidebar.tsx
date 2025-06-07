"use client";

import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CategoriesSidebar({ open, onClose }: Props) {
  return (
    <div
      className={`fixed top-0 left-0  bg-white pt-10 md:absolute  overflow-hidden  h-screen transition-all duration-300 ${
        open ? "w-[300px]" : "w-0"
      }`}
    >
      <div className="px-5 flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Categories</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <ul className="px-5">
        <li className="font-bold pb-2 mb-2 border-b border-pink-300 text-sm hover:text-pink-500 cursor-pointer">
          Women Clothing
        </li>
      </ul>
    </div>
  );
}
