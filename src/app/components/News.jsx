
import { ProductCard } from "./ProductCard"
import { sampleProducts } from "@/app/utils/samples"

export const News = () => {

    return (
        <section id="novedades" className="mt-40 px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-full">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {sampleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}