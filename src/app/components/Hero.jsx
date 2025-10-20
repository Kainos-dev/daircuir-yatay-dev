
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
        }, 2500);

        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    const scrollToNovedades = () => {
        const novedadesSection = document.getElementById('novedades');
        if (novedadesSection) {
            novedadesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            <section className="relative w-full h-screen max-h-screen overflow-hidden">
                {/* Imágenes del carrusel */}
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
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

                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Overlay inferior */}
                <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

                {/* Contenido */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1
                        onClick={scrollToNovedades}
                        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${habibi.className} tracking-widest text-[#e3e4e5] cursor-pointer hover:scale-105 sm:hover:scale-110 transition-transform duration-300`}
                    >
                        NOVEDADES
                    </h1>
                </div>
            </section>
        </>
    );
};