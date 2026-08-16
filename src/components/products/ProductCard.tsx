import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import { SchematicRenderer } from "@/components/schematics/SchematicRenderer";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn("pcard group", className)}
      data-prod
      data-cats={product.categories.join(",")}
    >
      <div className="pcard-fig">
        <span className="tagl">{product.code}</span>
        <span className="circ-top">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </span>
        <SchematicRenderer schematicId={product.schematicId} />
      </div>

      <div className="pcard-bd">
        <div className="meta">
          <span>{product.stageName}</span>
          <span>{product.badge}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="chip">View specification</span>
      </div>
    </Link>
  );
};
