"use client";

import React, { useState } from "react";
import { products } from "@/data/products";
import { ProductCategory } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

const filterTabs: { key: ProductCategory; label: string }[] = [
  { key: "all", label: "All machinery" },
  { key: "wither", label: "Withering" },
  { key: "roll", label: "Maceration" },
  { key: "ferment", label: "Fermentation" },
  { key: "dry", label: "Drying" },
  { key: "sort", label: "Sorting" },
  { key: "pack", label: "Packing" },
  { key: "anc", label: "Ancillary" },
];

export const ProductCatalogue: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("all");

  const displayedProducts = products
    .filter((p) => {
      if (selectedCategory === "all") return true;
      return p.categories.includes(selectedCategory);
    })
    .slice(0, 6);

  return (
    <div className="container">
      <div className="tabs rv in">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            className={cn("tab", selectedCategory === tab.key && "on")}
            onClick={() => setSelectedCategory(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="cards rvg in">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
