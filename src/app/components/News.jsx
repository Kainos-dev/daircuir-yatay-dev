
import { ProductCard } from "./ProductCard"

const sampleProducts = [
    {
        id: '001',
        name: 'Cinto de cuerina Dair Cuir',
        description: 'Cinto de cuero sintético de alta calidad con hebilla metálica',
        coverImages: [
            '/images/foto1.jpg',
            '/images/foto2.jpg'
        ],
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
        coverImages: [
            '/images/foto1.jpg',
            '/images/foto2.jpg'
        ],
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
        coverImages: [
            '/images/foto1.jpg',
            '/images/foto2.jpg'
        ],
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

export const News = () => {

    return (
        <section id="novedades" className="px-4 py-16 md:px-8 lg:px-16">
            <div className="mx-auto max-full">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {sampleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}