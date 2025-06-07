import ProductDetails from "@/components/product/ProductDetails";
import RelatedProducts from "@/components/product/RelatedProducts";
import { ProductCardType } from "@/components/ui/cards/ProductCard";
import { fetchProducts } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const products = await fetchProducts();
  const { id } = await params;
  const product = products.find((item: ProductCardType) => item._id === id);

  return {
    title: product?.name || "Product Details",
    description: `Buy ${product?.name || "our product"} now at Glore BD!`,
  };
}
async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log(id);
  const productsData = await fetchProducts();
  const singleItem = productsData.find(
    (item: ProductCardType) => item._id === id
  );
  // console.log(singleItem);
  return (
    <div className="bg-pink-50 min-h-screen pb-20 px-5 md:px-10">
      <div
        className=" bg-pink-50 min-h-screen flex flex-col md:flex-row md:gap-5 lg:gap-30
      w-full pt-5 md:pt-35 items-center"
      >
        <div className="image relative w-full md:w-1/2  h-screen ">
          <Image
            alt=""
            src={singleItem?.images[0]?.optimizeUrl}
            fill
            className="md:px-10"
          />
        </div>
        <div className="content w-full md:w-1/2 ">
          <ProductDetails product={singleItem} />
        </div>
      </div>
      <div className="related-products md:px-10 md:mt-20">
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-gray-500 text-center my-5 text-2xl font-semibold">
            RELATED <span className="text-black">PRODUCTS</span>
          </h2>
          <div className="w-18 h-[2px] bg-black"></div>
        </div>
        <RelatedProducts products={productsData} />
      </div>
    </div>
  );
}

export default page;
