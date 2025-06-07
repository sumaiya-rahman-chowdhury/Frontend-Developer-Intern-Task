"use client";
import { AlignLeft, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CategoriesSidebar from "./CategoriesSidebar";
import IconButton from "../search/IconButton";
import CartButton from "../cart/CartButton";
import { useCart } from "@/context/CartContext";

function Navbar() {
  const { cartLength } = useCart();
  const router = useRouter();
  const [view, setView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(view);

  return (
    <nav
      className={`hidden md:block fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? " shadow-md bg-white" : "bg-pink-300"
      }`}
    >
      <header className="relative">
        <div className=" w-full min-h-16 flex justify-between items-center px-10">
          <div className="flex  justify-between w-full">
            <div className="flex gap-10">
              <button
                onClick={() => setView(!view)}
                className="font-semibold flex items-center gap-3"
              >
                <AlignLeft className="text-2xl font-bold" /> Menu
              </button>
              <IconButton
                icon={<Search />}
                label="Search"
                onClick={() => router.push("/collections")}
              />
            </div>
            <div className="logo relative w-36 h-13">
              <Link href={"/"}>
                {" "}
                <Image
                  alt=""
                  src="https://glorebd.com/assets/logo-CoRENOR5.webp"
                  fill
                />
              </Link>
            </div>
            <div className="flex items-center gap-10">
              <IconButton
                icon={<ShoppingBag />}
                label="Shop"
                onClick={() => router.push("/collections")}
              />
              <CartButton
                count={cartLength}
                icon={<ShoppingBag className="text-black text-2xl" />}
              />
            </div>
          </div>
        </div>
        {/* <div
          className={`absolute top-0 overflow-hidden bg-pink-500 h-screen transition-all duration-300 ${
            view ? "w-[400px]" : "w-0"
          }`}
        >
          <button onClick={() => setView(false)}>close</button>
        </div> */}
        <CategoriesSidebar open={view} onClose={() => setView(false)} />
      </header>
    </nav>
  );
}

export default Navbar;
