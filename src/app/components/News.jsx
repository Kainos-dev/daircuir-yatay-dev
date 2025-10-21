'use client'

import { ProductCard } from "./ProductCard"
import { sampleProducts } from "@/app/utils/samples"

import { useSearchParams } from 'next/navigation';

export const News = () => {
    const searchParams = useSearchParams();
    const activeFilter = searchParams.get('category');

    const filteredProducts = activeFilter
        ? sampleProducts.filter((product) =>
            product.collection?.some((collection) =>
                collection
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase() === activeFilter.toLowerCase()
            )
        )
        : sampleProducts;

    return (
        <section id="novedades" className="mt-40 px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-full">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            No hay productos en esta categoría
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};