import { fetchProducts } from "@/lib/api";
import CollectionTextContent from "../text-contents/CollectionTextContent";
import ProductCard, { ProductCardType } from "../ui/cards/ProductCard";

export default async function Collections() {
  const productsData = await fetchProducts();
  console.log(productsData);
  return (
    <div className="bg-pink-100 min-h-screen px-3 md:px-10 pb-20">
      <CollectionTextContent />
      <h3 className="font-semibold text-2xl">Women Clothing</h3>
      <div className="product-card mt-5 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        {productsData.map((item: ProductCardType) => {
          return <ProductCard key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
}
