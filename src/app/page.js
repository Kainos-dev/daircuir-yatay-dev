
import { ProductCard } from '@/app/components/ProductCard';
import { Hero } from '@/app/components/Hero';
import { News } from '@/app/components/News';

export default function Home() {

  const images = [
    '/images/bg-hero-01.jpg',  // Imagen 0 - Portada 1
    '/images/bg-hero-02.jpg',  // Imagen 1 - Portada 2
    '/images/bg-hero-03.jpg',  //
  ]


  return (
    <>
      <Hero images={images} />
      <News />
    </>
  );
}
