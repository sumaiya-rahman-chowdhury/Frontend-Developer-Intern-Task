import Image from "next/image";
import React from "react";

function page() {
  return (
    <main className="bg-pink-300 min-h-screen px-4 md:py-20 flex flex-col items-center">
      <div className="flex items-center justify-center gap-3 pt-15">
        <h2 className="text-gray-500  my-5 text-xl ">
          CONTACT <span className="text-black">US</span>
        </h2>
        <div className="w-18 h-[2px] bg-black"></div>
      </div>
      <div className="flex justify-center gap-3  my-5 flex-col lg:flex-row md:flex-row">
        <div className="lg:w-1/2">
          <Image
            src="https://glorebd.com/assets/about_img-4BbpaMTv.webp"
            alt="About GloreBD"
            width={600}
            height={800}
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-6 rounded-md sticky top-[400px]">
            <h3 className="text-2xl font-semibold mb-4">Our Store</h3>
            <p className="mb-2">
              <span className="font-bold">ঠিকানা:</span> ৭২২/৩ রসনা ভিলা, ৪র্থ
              তলা বসুন্ধরা লেন, পশ্চিম কাজীপাড়া, মিরপুর - ১২১৬
            </p>
            <p className="mb-2">
              <span className="font-bold">মোবাইল নম্বর:</span> (+88)
              01855-375963
            </p>
            <p>
              <span className="font-bold">ইমেইল:</span> hello@glorebd.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
