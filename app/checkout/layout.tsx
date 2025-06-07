import type { ReactNode } from "react";

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-pink-50 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
