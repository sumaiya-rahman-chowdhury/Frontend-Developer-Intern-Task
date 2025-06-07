import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="relative w-[150px] h-14">
            <Image
              alt=""
              src={"https://glorebd.com/assets/logo2-ucxU_5Jw.webp"}
              fill
            />
          </div>
          <p className="mt-4 text-sm text-gray-300">
            আমাদের কালেকশন আপনাকে দেখবে ফ্যাশনের আত্মবিশ্বাস এবং প্রিয়জনের একটি
            স্মৃতিময় সু্মিল।
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Client Experience</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#">Customer Reviews</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">GET IN TOUCH</h3>
          <p className="text-sm text-gray-300">
            মোবাইল নম্বর: (+88) 01855-375963
            <br />
            ইমেইল: hello@glorebd.com
          </p>
          <div className="flex space-x-4 mt-4 text-xl text-white">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaFacebookMessenger />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className=" text-white text-center py-3 text-sm">
        © 2025 Powered by{" "}
        <span className="font-bold text-orange-400">Sumaiya Rahman C</span>
      </div>
    </footer>
  );
}
