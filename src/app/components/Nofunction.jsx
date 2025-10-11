
import { habibi } from "@/app/ui/fonts"

import Image from 'next/image';

export const Nofunction = () => {
    return (
        <div className={`${habibi.className} h-screen flex flex-col items-center bg-black/70 justify-center text-center px-24 text-white lg:text-3xl`}>
            Nuestro sitio web fue afectado por un hackeo, pero ya estamos trabajando para volver a estar en línea con una nueva página, más segura y cuidada.
            Le pedimos diculpas por las molestias ocasionadas y les damos las gracias por su paciencia y por seguir eligiéndonos siempre. <br />
            — El equipo de Darc Cuir & Yatay.
            <div className="flex justify-center mt-12 w-full items-center gap-8 mb-4">
                <Image
                    src="/images/logo-darccuir-blanco.png"
                    /* className='border border-white' */
                    alt="Logo Yatay"
                    width={170}
                    height={170}
                    quality={90}
                />
                <Image
                    src="/images/logo-yatay-blanco.png"
                    alt="Logo Yatay"
                    /* className='border border-white' */
                    width={170}
                    height={170}
                    quality={90}
                />
            </div>
        </div>
    )
}