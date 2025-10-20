'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
//components
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
//fonts
import { barlow } from "@/app/ui/fonts";


export default function ProductDetailsClient({ product }) {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const hasVariants = product.variants && product.variants.length > 0;
    const [selectedVariant, setSelectedVariant] = useState(hasVariants ? product.variants[0] : null);

    const allImagesInProduct = hasVariants
        ? [...product.coverImages, ...product.variants.flatMap(v => v.images)]
        : product.coverImages;

    const getFirstImageIndexOfVariant = (variant) => {
        if (!hasVariants) return 0;
        const coverImagesCount = product.coverImages.length;
        let currentIndex = coverImagesCount;

        for (let v of product.variants) {
            if (v.color.hex === variant.color.hex) return currentIndex;
            currentIndex += v.images.length;
        }
        return 0;
    };

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % allImagesInProduct.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + allImagesInProduct.length) % allImagesInProduct.length);

    const handleColorChange = (variant) => {
        setSelectedVariant(variant);
        setCurrentImageIndex(getFirstImageIndexOfVariant(variant));
    };

    const handleBack = () => {
        if (window.history.length > 1) router.back();
        else router.push('/');
    };

    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row bg-white">
            {/* Carrusel de imágenes */}
            <div className="lg:w-1/2 w-full flex flex-col gap-4 p-4 lg:p-8 bg-gray-50">
                {/* Imagen principal */}
                <div className="relative bg-white rounded-lg overflow-hidden flex-1 min-h-[300px] lg:min-h-[400px]">
                    <Image
                        src={allImagesInProduct[currentImageIndex]}
                        alt={`${product.name} - Imagen ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                        className="w-full h-full object-contain"
                    />

                    {/* Botones de navegación */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full cursor-pointer p-2 transition"
                    >
                        <ChevronLeft size={24} className="text-gray-800" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full cursor-pointer p-2 transition"
                    >
                        <ChevronRight size={24} className="text-gray-800" />
                    </button>

                    {/* Indicador */}
                    <div className="absolute bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 lg:px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {allImagesInProduct.length}
                    </div>
                </div>

                {/* Miniaturas */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {allImagesInProduct.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition ${currentImageIndex === idx ? 'border-gray-800' : 'border-gray-300 hover:border-gray-500'
                                }`}
                        >
                            <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-contain" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Información del Producto */}
            <div className={`${barlow.className} relative lg:w-1/2 w-full flex flex-col gap-6 p-6 lg:p-12 overflow-y-auto`}>
                <div>
                    <p className="text-sm text-white uppercase tracking-wide bg-[#90682f] px-2 py-1 rounded-sm inline">{product.collection}</p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mt-4 lg:mt-10">{product.name}</h1>
                </div>

                <div className="border-t border-gray-200 pt-4 lg:pt-6">
                    <p className="text-lg sm:text-xl lg:text-3xl">
                        Precio: ${product.price > 0 ? product.price.toLocaleString() : ''}
                    </p>
                </div>

                {/* Selector de Colores */}
                <div className="border-t border-gray-200 pt-4 lg:pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Colores Disponibles</h3>
                    {hasVariants ? (
                        <div className="flex flex-wrap gap-3">
                            {product.variants.map((variant) => (
                                <button
                                    key={variant.color.hex}
                                    onClick={() => handleColorChange(variant)}
                                    className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg border-2 transition ${selectedVariant.color.hex === variant.color.hex
                                        ? 'border-gray-800 bg-gray-50'
                                        : 'border-gray-300 hover:border-gray-500'
                                        }`}
                                >
                                    <div
                                        className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: variant.color.hex }}
                                    />
                                    <span className="text-sm lg:text-base font-medium">{variant.color.name}</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600 italic">Este producto no tiene variantes de color.</p>
                    )}
                </div>

                {/* Botón Volver */}
                <button
                    onClick={handleBack}
                    className="px-2 lg:px-4 py-1 lg:py-2 bg-[#90682f] text-white rounded hover:bg-[#9b7d53] absolute bottom-4 lg:bottom-12 right-4 lg:right-12 text-center"
                >
                    VOLVER
                </button>
            </div>
        </div>
    );
}