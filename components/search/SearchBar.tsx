"use client";
import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
type Props = {
  onSearch: (query: string) => void;
};
export function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState(" ");
  const [view, setView] = useState(true);

  useEffect(() => {
    onSearch(query);
  }, [query,onSearch]);

  return (
    <div
      className={`relative max-w-3xl mx-auto flex items-center border rounded-full px-4 py-2
     bg-white shadow-md ${view ? "block" : "hidden"}`}
    >
      <Search className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none flex-1 bg-transparent text-sm"
      />
      {query && (
        <button onClick={() => setQuery("")}>
          <X className="w-4 h-4 text-gray-400 text-7xl" />
        </button>
      )}
      <button className="absolute -right-10" onClick={() => setView(false)}>
        <X className="w-4 h-4 text-gray-400 text-7xl" />
      </button>
    </div>
  );
}
