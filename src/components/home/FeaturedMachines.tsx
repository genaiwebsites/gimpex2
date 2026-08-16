import React from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export const FeaturedMachines: React.FC = () => {
  const featured = products.filter((p) => p.highlighted);

  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="sec-hd">
          <div className="rv in">
            <span className="eyebrow">Machinery</span>
            <h2>
              Drawn, machined and <em>proven at load.</em>
            </h2>
          </div>
          <div className="rv in">
            <p className="lede" style={{ marginBottom: "18px" }}>
              Six of our most-specified units. Each one is manufactured to order at the Kolkata works.
            </p>
            <Link className="btn btn-line" href="/products">
              <span>View all 19 machines</span>
              <span className="circ">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="cards rvg in">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
