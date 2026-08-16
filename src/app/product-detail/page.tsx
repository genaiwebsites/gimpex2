import ProductDetailPage from "@/app/products/[slug]/page";

export default function LegacyProductDetailPage() {
  return <ProductDetailPage params={{ slug: "rotorvane" }} />;
}
