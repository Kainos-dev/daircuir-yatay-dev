

import Image from 'next/image';
import { habibi } from "../ui/fonts"

import { ChevronUp, ChevronDown } from "lucide-react";
{/* <ChevronUp />
<ChevronDown /> */}

export const Navbar = () => {
    return (
        <nav className="absolute top-30 z-20 w-full p-4">
            <div className="flex justify-center items-center gap-8 mb-4">
                <Image
                    src="/images/logo-darccuir-blanco.png"
                    className='hover:scale-105 transition-transform duration-100'
                    alt="Logo Yatay"
                    width={120}
                    height={120}
                    quality={90}
                />
                <Image
                    src="/images/logo-yatay-blanco.png"
                    alt="Logo Yatay"
                    className='hover:scale-105 transition-transform duration-100'
                    width={120}
                    height={120}
                    quality={90}
                />
            </div>


            <div className={`${habibi.className} flex gap-16 justify-center text-md md:text-lg lg:text-xl`}>
                <li className="list-none flex items-center cursor-pointer text-white hover:text-gray-200">
                    <a className="mx-2">ZAPATOS</a>
                    <ChevronUp />
                </li>
                <li className="text-white hover:text-gray-200 list-none flex items-center cursor-pointer">
                    <a className="mx-2">MATES</a>
                    <ChevronUp />
                </li>
                <li className="text-white hover:text-gray-200 list-none flex items-center cursor-pointer">
                    <a className="mx-2">CARTERAS</a>
                    <ChevronUp />
                </li>
                <li className="text-white hover:text-gray-200 list-none flex items-center cursor-pointer">
                    <a className="mx-2">ACCESORIOS</a>
                    <ChevronUp />
                </li>
            </div>
        </nav>
    )
}