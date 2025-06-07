export default function BannerTextContent() {
  return (
    <section className="text-center px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
        নতুন
      </h2>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mt-2">
        কালেকশন
      </h3>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
        <span className="text-pink-600 ">✨ GloreBD</span> - এর সাথে ফ্যাশনে পান
        রাখুন নতুন দিগন্তে! ❤️ <br />
        <span className="hidden md:block text-black">
          {" "}
          আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! <br />
          আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️
        </span>
      </p>

      <button className="mt-6 sm:mt-8 bg-pink-600 text-white font-semibold px-3 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-700 transition">
        অর্ডার করুন
      </button>
    </section>
  );
}
