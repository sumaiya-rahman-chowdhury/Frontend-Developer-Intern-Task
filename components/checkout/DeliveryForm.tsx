"use client";

import { useCart } from "@/context/CartContext";

export default function DeliveryForm() {
  const {subtotal} = useCart()
  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold border-b pb-2">DELIVERY INFORMATION</h2>
      <p className="text-sm text-gray-600">
        অর্ডার নিশ্চিত করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার দিয়ে অর্ডার কনফার্ম করুন।
      </p>

      <input className="w-full p-2 border border-gray-100 rounded" placeholder="Enter Full Name" />
      <input className="w-full p-2 border rounded border-gray-100" placeholder="Enter Contact Number" />
      <textarea className="w-full p-2 border rounded border-gray-100" placeholder="Enter Delivery Address" />

      <select className="w-full p-2 border rounded border-gray-100">
        <option>Select Delivery Area</option>
      </select>

      <input className="w-full p-2 border rounded border-gray-100" placeholder="Enter Your Note (optional)" />

      <div>
        <strong>Payment Method</strong>
        <div className="mt-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" defaultChecked />
            Cash on Delivery
          </label>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>৳ {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charge</span>
          <span>৳ 0.00</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>৳ {subtotal}</span>
        </div>
      </div>

      <button className="w-full bg-pink-600 text-white p-3 rounded font-semibold">
        অর্ডারটি নিশ্চিত করুন
      </button>
    </div>
  );
}
