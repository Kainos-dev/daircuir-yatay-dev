
'use client';

import { useState } from 'react';
import Link from "next/link";
//components
import Image from 'next/image'
//fonts
import { barlow } from '@/app/ui/fonts';

export const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        // Aquí irá la navegación a la vista detalle
        console.log('Ir a detalle del producto:', product.id);
        // Ejemplo: router.push(`/productos/${product.id}`);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0
        }).format(price);
    };

    return (
        <Link
            href={`/products/${product.id}`} // ruta dinámica
            className="block"
        >
            <div
                className={`${barlow.className} cursor-pointer flex flex-col h-full rounded-md shadow-md transition-all hover:shadow-[0_0_10px_rgba(0,0,0,0.25)]`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Contenedor de imagen */}
                <div className="relative w-full overflow-hidden rounded- bg-none flex-shrink-0">
                    <Image
                        src={product.coverImages[0]}
                        alt={product.name}
                        width={600}
                        height={600}
                        className={`w-full h-auto object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <Image
                        src={product.coverImages[1]}
                        alt={`${product.name} - Vista alternativa`}
                        fill
                        className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <span className="absolute top-0 left-0 bg-[#A27B5C] text-white py-1 px-2 font-semibold">
                        { product.collection  }
                    </span>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 mt-4 sm:mt-8 lg:mt-12 relative flex-1 flex flex-col justify-between">
                    <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold">
                        {product.name}
                    </h2>

                    <div className="flex w-full justify-between items-center mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-2xl">
                        <span>{formatPrice(product.price)}</span>
                        <div className="flex items-center gap-1">
                            {product.variants.slice(0, 2).map((color) => (
                                <div
                                    key={color.color.name}
                                    className="w-6 h-6 rounded-full border"
                                    style={{ backgroundColor: color.color.hex }}
                                    title={color.color.name}
                                ></div>
                            ))}
                            {product.variants.length > 2 && (
                                <span className="text-sm sm:text-base">
                                    +2
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}