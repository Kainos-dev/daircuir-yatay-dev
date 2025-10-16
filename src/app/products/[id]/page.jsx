
//utils
import { sampleProducts } from "@/app/utils/samples";
//components
import ProductDetailsClient from "@/app/components/ProductDetailsClient";

export default async function ProductDetails({ params }) {
    const { id } = await params;
    const product = sampleProducts.find((p) => p.id === id);
    return <ProductDetailsClient product={product} />;
}