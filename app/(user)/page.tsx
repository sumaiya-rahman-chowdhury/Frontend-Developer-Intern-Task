import FloatingCartIcon from "@/components/cart/FloatingCartButton";
import Banner from "@/components/home/Banner";
import Collections from "@/components/home/Collection";
import PolicySection from "@/components/home/Policy";

export default function Home() {
  return (
    <main>
      <Banner />
      <Collections />
      <PolicySection />
      <FloatingCartIcon />
    </main>
  );
}
