import Image from "next/image";
import Link from "next/link";
import BannerTextContent from "../text-contents/BannerTextContent";

function Banner() {
  return (
    <div className="bg-pink-300 md:min-h-screen w-full p-3 md:py-20  md:px-10">
      <div
        className="hero w-full h-[350px] md:min-h-[700px]  bg-pink-100 m-auto rounded-2xl
      grid grid-cols-12 md:flex items-center justify-center  gap-5
      "
      >
        <div className="text-content col-span-8">
          <div className="block md:hidden logo relative w-26 h-8 mx-auto mb-5">
            <Link href={"/"}>
              {" "}
              <Image
                alt=""
                src="https://glorebd.com/assets/logo-CoRENOR5.webp"
                fill
              />
            </Link>
          </div>
          <BannerTextContent />
        </div>
        <div className="image-container col-span-4 relative w-full md:w-[450px] h-[350px] md:h-[700px]">
          <Image
            fill
            alt="model image"
            src="https://glorebd.com/assets/hero-o4bu130g.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
