
import { ProductCard } from '@/app/components/ProductCard';

export default function Home() {

  const sampleProducts = [
    {
      id: '001',
      name: 'Cinto de cuerina Dair Cuir',
      description: 'Cinto de cuero sintético de alta calidad con hebilla metálica',
      coverImage: '/images/foto1.jpg',      // Imagen 0 - Portada 1
      coverImage2: '/images/foto2.jpg',     // Imagen 1 - Portada 2
      images: [
        '/images/foto3.jpg',  // Imagen 2 - Color Negro
        '/images/foto4.jpg',  // Imagen 3 - Color Marrón
        '/images/foto5.jpg',  // Imagen 4 - Color Café
      ],
      colors: [
        { name: 'Negro', hex: '#000000' },
        { name: 'Marrón', hex: '#8B4513' },
        { name: 'Café', hex: '#A0522D' }
      ],
      price: 12999,
    },
    {
      id: '002',
      name: 'Reloj Inteligente Pro',
      description: 'Monitor de salud 24/7 con GPS integrado y batería de larga duración',
      coverImage: '/images/foto1.jpg',      // Imagen 0 - Portada 1
      coverImage2: '/images/foto2.jpg',     // Imagen 1 - Portada 2
      images: [
        '/images/foto3.jpg',  // Imagen 2 - Color Negro
        '/images/foto4.jpg',  // Imagen 3 - Color Marrón
        '/images/foto5.jpg',  // Imagen 4 - Color Café
      ],
      colors: [
        { name: 'Plata', hex: '#C0C0C0' },
        { name: 'Negro', hex: '#1F2937' },
        { name: 'Oro Rosa', hex: '#E8C4B8' }
      ],
      price: 299990,
    },
    {
      id: '003',
      name: 'Mochila Urban Explorer',
      description: 'Diseño urbano con compartimentos para laptop y carga USB',
      coverImage: '/images/foto1.jpg',      // Imagen 0 - Portada 1
      coverImage2: '/images/foto2.jpg',     // Imagen 1 - Portada 2
      images: [
        '/images/foto3.jpg',  // Imagen 2 - Color Negro
        '/images/foto4.jpg',  // Imagen 3 - Color Marrón
        '/images/foto5.jpg',  // Imagen 4 - Color Café
      ],
      colors: [
        { name: 'Azul', hex: '#1E40AF' },
        { name: 'Verde', hex: '#059669' },
        { name: 'Gris', hex: '#6B7280' }
      ],
      price: 89990,
    }
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-100">
      {
        sampleProducts.map(product => (
          <div key={product.id} className="p-4">
            <ProductCard product={product} />
          </div>
        ))
      }
    </div>
  );
}
