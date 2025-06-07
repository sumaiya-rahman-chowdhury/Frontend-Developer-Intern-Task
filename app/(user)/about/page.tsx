import AboutLeft from "@/components/about/AboutLeft";
import AboutRight from "@/components/about/AboutRight";
import WhyChooseUs from "@/components/about/WhyChooseUs";

function page() {
  const featureList = [
    {
      title: "গুণগত মান নিশ্চিতকরণঃ",
      description:
        "আমরা প্রতিটি পোশাককে নির্ভুল ও মানসম্মত করতে, খুঁটিনাটি বিষয়েও সর্বোচ্চ মনোযোগ দিয়ে থাকি।",
    },
    {
      title: "সুবিধাঃ",
      description:
        "আমাদের ব্যবহার-বান্ধব ইউজারইন্টারফেস এবং অর্ডার ট্র্যাকিং সিস্টেম আপনার কেনাকাটাকে আরও সহজ করে তোলে।",
    },
    {
      title: "অসাধারণ কাস্টমার সেবা:",
      description:
        "আমাদের নিরবচ্ছিন্ন কাস্টমার সাপোর্ট সার্ভিস নিশ্চিত করে আপনার সর্বোচ্চ সন্তুষ্টি।",
    },
  ];

  return (
    <main className="bg-pink-300 min-h-screen px-4 py-20 items-center">
      <section className="flex flex-col lg:flex-row gap-8">
        <AboutLeft />
        <AboutRight />
      </section>
      <div className="flex items-center gap-3 pt-15">
        <h2 className="text-gray-500  my-5 text-xl ">
          WHY <span className="text-black">CHOOSE US</span>
        </h2>
        <div className="w-18 h-[2px] bg-black"></div>
      </div>
      <WhyChooseUs features={featureList} />
    </main>
  );
}

export default page;
