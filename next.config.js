/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.cdninstagram.com',
                port: '',
                pathname: '/v/**',
            },
        ]
    }
}

module.exports = nextConfig
