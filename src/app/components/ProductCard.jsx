
'use client';

import Image from 'next/image'
import { useState } from 'react';

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
        <div
            className="cursor-pointer overflow-hidden rounded-md shadow-md transition-all hover:shadow-xl"
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Contenedor de imagen */}
            <div className="relative w-full overflow-hidden bg-none">
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
            </div>

        </div>
    );
}