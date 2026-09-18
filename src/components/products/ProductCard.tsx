import React from "react";
import Link from "next/link";
import { Product } from "@/types";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
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

        {product.image ? (
          /* Real machine photo */
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              borderRadius: "inherit",
            }}
          >
            <ImageWithFallback
              src={product.image}
              alt={`${product.name} — tea processing machinery`}
              fill
              sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.5s ease",
              }}
              className="pcard-img"
            />
            {/* Subtle gradient overlay so code tag and arrow remain legible */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.18) 100%)",
              }}
            />
          </div>
        ) : (
          /* Fallback: styled placeholder with product code */
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--ink)",
              borderRadius: "inherit",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "clamp(11px, 1.5vw, 14px)",
                letterSpacing: "0.12em",
                color: "var(--grey)",
                opacity: 0.5,
              }}
            >
              {product.dimensionText}
            </span>
          </div>
        )}
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
