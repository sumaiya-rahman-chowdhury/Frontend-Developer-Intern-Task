import ProductCard, { ProductCardType } from "../ui/cards/ProductCard";
type RelatedProductsProps = {
  products: ProductCardType[];
};
function RelatedProducts({ products }: RelatedProductsProps) {
  console.log(products);
  return (
    <div
      className="grid grid-cols-2 md:flex items-center md:justify-center lg:justify-start gap-2 md:gap-5 flex-wrap 
    
    "
    >
      {products.slice(0, 3).map((item: ProductCardType) => {
        return (
          <div key={item._id} className="relative">
            <ProductCard product={item} />
            <div className="discount">
              <p
                className="absolute right-2 top-2 bg-white p-1 rounded-full
              font-bold
              "
              >
                Save:12%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RelatedProducts;
