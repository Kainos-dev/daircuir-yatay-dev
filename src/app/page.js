
import { Hero } from '@/app/components/Hero';
import { News } from '@/app/components/News';
import { Nofunction } from '@/app/components/Nofunction';
//fonts
import { barlow } from '@/app/ui/fonts';
//icons
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {

  const images = [
    '/images/bg-hero-01.jpg',  // Imagen 0 - Portada 1
    '/images/bg-hero-02.jpg',  // Imagen 1 - Portada 2
    '/images/bg-hero-03.jpg',  //
  ]


  return (
    <>
      {/* <Nofunction /> */}
      <Hero images={images} />
      <section className={`${barlow.className} max-w-5xl mx-auto text-center mt-40 px-4 py-10 text-gray-800 lg:text-lg xl:text-2xl`}>
        <h2 className="font-semibold mb-4">Actualización en curso</h2>
        <p className="leading-relaxed">
          Estamos realizando una renovación integral de nuestra web con el propósito de ofrecer una mejor
          presentación y atención en línea.
        </p>
        <p className="mt-4">
          Agradecemos la paciencia y la confianza de quienes continúan acompañándonos en este proceso.
          Hasta completar la actualización, las consultas y compras pueden gestionarse por WhatsApp, desde el ícono
          habilitado en el sitio.
        </p>
        <p className="mt-6 font-medium">Atte: El equipo de Darc Cuir & Yatay.</p>
      </section>

      <a
        href="https://wa.me/5491165691369?text=¡Hola!%20Quisiera%20hacer%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#A27B5C] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <FaWhatsapp size={28} />
      </a>

      <News />
    </>
  );
}
