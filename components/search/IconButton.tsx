"use client";

import { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode; 
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function IconButton({ icon, label, onClick, className = "" }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`font-semibold flex items-center gap-3 ${className}`}
    >
      {icon}
      {label}
    </button>
  );
}
