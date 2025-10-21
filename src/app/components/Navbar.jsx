'use client'
// Navbar component:
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { habibi } from '@/app/ui/fonts';

const navigationItems = ["CALZADO DE DAMA", "CALZADO DE HOMBRE", "RINCÓN MATERO", "SENDEROS", "ACCESORIOS"];

export const Navbar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeFilter = searchParams.get('category');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToNovedades = () => {
        setTimeout(() => {
            const novedadesSection = document.getElementById('novedades');
            if (novedadesSection) {
                novedadesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150);
    };

    const handleFilterClick = (item) => {
        const normalizedItem = item
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        setIsMobileMenuOpen(false);
        router.push(`/?category=${encodeURIComponent(normalizedItem)}`);
        scrollToNovedades();
    };

    const handleAllProducts = () => {
        setIsMobileMenuOpen(false);
        router.push('/');
        scrollToNovedades();
    };

    return (
        <nav className="absolute top-0 z-20 w-full p-3 sm:p-4">
            {/* Logos */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-3 sm:mb-4">
                <Image
                    src="/images/logo-darccuir-blanco.png"
                    className="hover:scale-105 transition-transform duration-100 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                    alt="Logo Darc Cuir"
                    width={120}
                    height={120}
                    quality={90}
                />
                <Image
                    src="/images/logo-yatay-blanco.png"
                    alt="Logo Yatay"
                    className="hover:scale-105 transition-transform duration-100 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                    width={120}
                    height={120}
                    quality={90}
                />
            </div>

            {/* Menú hamburguesa para mobile */}
            <button
                className="md:hidden flex items-center justify-center w-10 h-10 mx-auto text-white hover:text-gray-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Navegación Desktop */}
            <div className="hidden md:flex md:flex-wrap md:gap-6 lg:gap-8 md:justify-center md:text-sm lg:text-base xl:text-lg">
                <li
                    onClick={handleAllProducts}
                    className={`list-none flex items-center cursor-pointer transition-colors ${!activeFilter ? 'text-[#A27B5C]' : 'text-white hover:text-gray-200'
                        } ${habibi.className}`}
                >
                    <a className="mx-2">TODOS</a>
                </li>
                {navigationItems.map((item) => (
                    <li
                        key={item}
                        onClick={() => handleFilterClick(item)}
                        className={`list-none flex items-center cursor-pointer transition-colors ${activeFilter === item.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                                ? 'text-[#A27B5C]'
                                : 'text-white hover:text-gray-200'
                            } ${habibi.className}`}
                    >
                        <a className="mx-2">{item}</a>
                    </li>
                ))}
            </div>

            {/* Menú Mobile */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-3 bg-black/80 rounded-md p-4">
                    <li
                        onClick={handleAllProducts}
                        className={`list-none flex items-center cursor-pointer transition-colors text-sm py-2 ${!activeFilter ? 'text-[#A27B5C]' : 'text-white hover:text-gray-200'
                            } ${habibi.className}`}
                    >
                        <a className="mx-2">TODOS</a>
                    </li>
                    {navigationItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => handleFilterClick(item)}
                            className={`list-none flex items-center cursor-pointer transition-colors text-sm py-2 ${activeFilter === item.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                                    ? 'text-[#A27B5C]'
                                    : 'text-white hover:text-gray-200'
                                } ${habibi.className}`}
                        >
                            <a className="mx-2">{item}</a>
                        </li>
                    ))}
                </div>
            )}
        </nav>
    );
};