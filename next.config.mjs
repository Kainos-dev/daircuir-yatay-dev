/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**', // permite todas las rutas dentro del dominio
            },
        ],
    },
};

export default nextConfig;
