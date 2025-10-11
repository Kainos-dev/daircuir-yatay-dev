
'use client';

import { useState, useEffect } from 'react';

//fonts
import { barlow, habibi } from '@/app/ui/fonts';
//components
import { Navbar } from './Navbar';
import Image from 'next/image';

export const Hero = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2500); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    /* const resetInterval = () => {
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 100);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        resetInterval();
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        resetInterval();
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        resetInterval();
    }; */

    const scrollToNovedades = () => {
        const novedadesSection = document.getElementById('novedades');
        if (novedadesSection) {
            novedadesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            <section className="relative h-screen w-full overflow-hidden">
                {/* Imágenes del carrusel */}
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={src}
                            alt={`Hero ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            quality={90}
                        />
                    </div>
                ))}

                {/* Overlay oscuro para mejorar legibilidad */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Contenido sobre el carrusel */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center mt-12 px-4 text-center text-white">
                    <h1
                        onClick={scrollToNovedades}
                        className={`mb-4 text-5xl font-bold md:text-7xl lg:text-8xl ${habibi.className} tracking-widest text-[#e3e4e5] cursor-pointer hover:scale-110 transition-transform`}
                    >
                        NOVEDADES
                    </h1>
                </div>

                {/* Flechas de navegación */}
                {/*  <button  
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 backdrop-blur-sm transition hover:bg-white/50 cursor-pointer"
                aria-label="Anterior"
            >
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full p-3 backdrop-blur-sm transition hover:bg-white/50 cursor-pointer"
                aria-label="Siguiente"
            >
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button> */}

                {/* Indicadores */}
                {/* <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === currentIndex
                            ? 'w-8 bg-white'
                            : 'w-2 bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div> */}
            </section>
        </>
    );
}