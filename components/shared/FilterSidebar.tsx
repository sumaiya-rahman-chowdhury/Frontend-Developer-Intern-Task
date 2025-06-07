"use client";
import React from "react";
type Props = {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  selectedPrice: number;
  onPriceChange: (price: number) => void;
};

export function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
}: Props) {
  const handleCheckboxChange = (cat: string) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];

    onCategoryChange(updated);
  };
  return (
    <aside
      className=" rounded-md shadow-md p-4 w-full lg:w-64 border-gray-200
    border-[1px] h-[400px] text-gray-500
    "
    >
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Filter by Sub-Category</h3>
        <div className="space-y-2">
          {[
            "Women Clothing",
            "Sharee",
            "Jamdani Sharee",
            "Dress",
            "Three Pics",
            "unstitched party dress",
            "Category 3",
          ].map((cat) => (
            <label key={cat} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="accent-pink-600"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCheckboxChange(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">Filter by Price</h3>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>Min: ৳2197</span>
          <span>Max: ৳2500</span>
        </div>
        <input
          type="range"
          min={2197}
          max={2500}
          value={selectedPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-pink-600"
        />
      </div>
    </aside>
  );
}
