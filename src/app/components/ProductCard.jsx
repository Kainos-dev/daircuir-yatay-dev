
'use client';

import { useState } from 'react';
import Link from "next/link";
//components
import Image from 'next/image'
//fonts
import { barlow } from '@/app/ui/fonts';

export const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        }).format(price);
    };

    // Determinar qué imagen mostrar
    const hasMultipleCoverImages = product.coverImages && product.coverImages.length >= 2;
    const hasCoverImages = product.coverImages && product.coverImages.length > 0;
    const mainImage = hasCoverImages ? product.coverImages[0] : product.variants[0]?.images[0];
    const alternativeImage = hasMultipleCoverImages ? product.coverImages[1] : null;

    return (
        <Link
            href={`/products/${product.id}`}
            className="block"
        >
            <div
                className={`${barlow.className} cursor-pointer flex flex-col h-full rounded-md shadow-md transition-all hover:shadow-[0_0_10px_rgba(0,0,0,0.25)]`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Contenedor de imagen */}
                <div className="relative w-full overflow-hidden rounded-md bg-none flex-shrink-0">
                    {hasMultipleCoverImages ? (
                        <>
                            <Image
                                src={mainImage}
                                alt={product.name}
                                width={600}
                                height={600}
                                className={`w-full h-auto object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />
                            <Image
                                src={alternativeImage}
                                alt={`${product.name} - Vista alternativa`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </>
                    ) : (
                        <Image
                            src={mainImage}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    )}
                    {product.collection?.some(item => item.toLowerCase() === "senderos") && (
                        <span className="absolute top-0 left-0 bg-[#A27B5C] rounded-tl-md text-white py-1 px-2 font-semibold">
                            SENDEROS
                        </span>
                    )}

                </div>

                <div className="p-4 sm:p-6 lg:p-8 mt-4 sm:mt-8 lg:mt-12 relative flex-1 flex flex-col justify-between">
                    <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold">
                        {product.name}
                    </h2>

                    <div className="flex w-full justify-between items-center mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-2xl">
                        {
                            product.price > 0 && (
                                <span>{formatPrice(product.price)}</span>
                            )
                        }
                        <div className="flex items-center gap-1">
                            {product.variants.slice(0, 2).map((variant) => (
                                <div
                                    key={variant.color.name}
                                    className="w-6 h-6 rounded-full border"
                                    style={{ backgroundColor: variant.color.hex }}
                                    title={variant.color.name}
                                ></div>
                            ))}
                            {product.variants.length > 2 && (
                                <span className="text-sm sm:text-base">
                                    +{product.variants.length - 2}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};