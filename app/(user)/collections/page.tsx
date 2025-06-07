"use client";

import { useCallback, useEffect, useState } from "react";
import { SearchBar } from "@/components/search/SearchBar";
import { FilterSidebar } from "@/components/shared/FilterSidebar";
import ProductCard, {
  ProductCardType,
} from "@/components/ui/cards/ProductCard";
import { fetchProducts } from "@/lib/api";

export default function CollectionsPage() {
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState<ProductCardType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(2500);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      const searchTerm = query.toLowerCase();
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setFiltered(filteredResults);
    },
    [products]
  );

  useEffect(() => {
    const filteredItems = products.filter((item) => {
      const matchCategory =
        categories.length === 0 || categories.includes(item.category.name);
      const matchPrice = Number(item.price) <= maxPrice;
      return matchCategory && matchPrice;
    });

    setFiltered(filteredItems);
  }, [categories, maxPrice, products]);
  return (
    <div className="bg-pink-100 min-h-screen px-4 py-16">
      <div className="hidden md:block border-y py-5 border-gray-300 mb-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <FilterSidebar
          selectedCategories={categories}
          onCategoryChange={setCategories}
          selectedPrice={maxPrice}
          onPriceChange={setMaxPrice}
        />

        <main className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              ALL <span className="text-gray-700">COLLECTIONS</span>
            </h2>
            {/* <SortDropdown /> */}
          </div>

          {loading ? (
            <p>Loading products...</p>
          ) : filtered.length === 0 ? (
            <p>No matching products found.</p>
          ) : (
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
            "
            >
              {filtered.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
