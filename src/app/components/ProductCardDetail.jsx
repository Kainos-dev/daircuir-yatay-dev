'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Simulación de next/image para el ejemplo
const Image = ({ src, alt, className, priority }) => (
    <img src={src} alt={alt} className={className} loading={priority ? 'eager' : 'lazy'} />
);

export const ProductCardDetail = ({ product }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const containerRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);

    useEffect(() => {
        const measure = () => {
            const el = containerRef.current;
            if (el) {
                // El ancho que usaremos por slide es el ancho del contenedor
                setSlideWidth(el.clientWidth);
            }
        };

        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // Todas las imágenes del producto (2 portadas + 3 colores)
    const allImages = [
        product.coverImage,    // índice 0 - portada 1
        product.coverImage2,   // índice 1 - portada 2
        ...product.images      // índices 2, 3, 4 - colores
    ];

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    const handleColorClick = (colorIndex) => {
        // Mapear: color 0 → imagen 2, color 1 → imagen 3, color 2 → imagen 4
        const imageIndex = colorIndex + 2;
        setCurrentIndex(imageIndex);
        setSelectedColor(colorIndex);
    };

    return (
        <div className="w-full max-w-sm h-68 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Carrusel de imágenes */}
            <div
                ref={containerRef}
                className={`relative overflow-hidden`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Imágenes */}
                <div
                    className="flex transition-transform duration-300 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
                >
                    {allImages.map((image, index) => (
                        <div key={index} className="w-full min-w-full h-full flex-shrink-0">
                            <Image
                                src={image}
                                alt={`${product.name} - imagen ${index + 1}`}
                                className="w-full h-full object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Flechas de navegación */}
                {allImages.length > 1 && isHovering && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-800" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
                            aria-label="Siguiente imagen"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-800" />
                        </button>
                    </>
                )}

                {/* Indicadores (dots) */}
                {allImages.length > 1 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                        {allImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToSlide(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${currentIndex === index
                                    ? 'bg-white w-6'
                                    : 'bg-white/60 hover:bg-white/80'
                                    }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Badge de cantidad de imágenes */}
                {allImages.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                        {currentIndex + 1}/{allImages.length}
                    </div>
                )}

                {/* Etiqueta de tipo de imagen */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {currentIndex < 2 ? 'Portada' : product.colors[currentIndex - 2]?.name}
                </div>
            </div>

        </div>
    );
};