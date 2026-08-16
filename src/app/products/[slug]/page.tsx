import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { SchematicRenderer } from "@/components/schematics/SchematicRenderer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";

import { CheckCircle2 } from "@/components/ui/Icons";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} ${product.code}`,
    description: product.description,
    openGraph: {
      title: `${product.name} ${product.code} — Gimpex Overseas`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products (excluding current product)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <section className="sec" style={{ paddingTop: "104px" }}>
        <div className="container">
          <div className="pd">
            <div className="pd-fig rv in">
              <span className="tagl">
                {product.code} · GENERAL ARRANGEMENT
              </span>
              <SchematicRenderer schematicId={product.schematicId} />
            </div>

            <div className="rv in">
              <div className="crumb" style={{ color: "var(--grey)", marginBottom: "16px" }}>
                <Link href="/products">Products</Link>
                <span>/</span>
                <span>{product.stageName}</span>
              </div>

              <span className="eyebrow">
                Stage — {product.stageName.toLowerCase()}
              </span>

              <h1 style={{ marginTop: "14px", fontSize: "clamp(32px, 4.2vw, 52px)" }}>
                {product.name}{" "}
                <em style={{ fontStyle: "normal", color: "var(--grey)" }}>
                  {product.code}
                </em>
              </h1>

              <p className="lede" style={{ marginTop: "18px" }}>
                {product.longDescription || product.description}
              </p>

              <dl className="specs">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="srow">
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="hero-cta" style={{ marginTop: "24px" }}>
                <Button variant="ink" href="/contact">
                  Request a quotation
                </Button>
                <Button variant="line" pad arrow={false} href="/products">
                  All machinery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-hd">
            <div className="rv in">
              <span className="eyebrow">Why estates specify it</span>
              <h2>
                Built for the <em>hardest shift.</em>
              </h2>
            </div>
          </div>

          <ul className="feat rvg in">
            {product.features.map((feature, idx) => (
              <li key={idx}>
                <CheckCircle2 size={18} strokeWidth={2} style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sec-hd">
            <div className="rv in">
              <span className="eyebrow">Related machinery</span>
              <h2>
                Next in <em>the line.</em>
              </h2>
            </div>
          </div>

          <div className="cards rvg in">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
