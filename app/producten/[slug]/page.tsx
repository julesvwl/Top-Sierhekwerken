import { notFound } from "next/navigation";
import ProductCategory from "@/components/ProductCategory";
import PoortAutomatisering from "@/components/PoortAutomatisering";
import { productCategories } from "@/lib/data";

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export default async function ProductCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ model?: string }>;
}) {
  const { slug } = await params;
  const { model } = await searchParams;

  const cat = productCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  if (slug === "poort-automatisering") {
    return <PoortAutomatisering cat={cat} />;
  }

  return <ProductCategory cat={cat} modelHash={model ?? ""} />;
}
