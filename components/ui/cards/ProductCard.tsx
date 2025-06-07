"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export type ProductCardType = {
  _id: string;
  name: string;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  images: [
    {
      optimizeUrl: string;
    }
  ];
  price: string;
};
export type ProductCardProps = {
  product: ProductCardType;
};
export default function ProductCard({ product }: ProductCardProps) {
  // console.log(product);
  const { addToCart } = useCart();
  const { name, price, images } = product;
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-auto max-w-[300px]">
      <div className="overflow-hidden relative min-w-[200px] h-[400px] md:w-[300px]">
        <Link href={`/single-product/${product._id}`}>
          {" "}
          <Image
            src={images[0].optimizeUrl}
            alt="product"
            fill
            className="transition-transform duration-300 ease-in-out hover:scale-120 object-fit-cover"
          />
        </Link>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => {
              addToCart({
                ...product,
                quantity: 1,
              });
            }}
            className="text-white bg-pink-600 hover:bg-pink-700 transition px-2 md:px-4 py-1.5 rounded-md text-sm font-semibold"
          >
            অর্ডার করুন
          </button>
          <p className="text-pink-700 font-semibold text-sm">৳{price}</p>
        </div>
      </div>
    </div>
  );
}
