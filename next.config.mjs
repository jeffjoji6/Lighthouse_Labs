/** @type {import('next').NextConfig} */
const nextConfig = {
  // shadcn components often require react modules, swc works fine
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // For easy static exports if needed, or to simplify image loading given previous vite setup
  },
};

export default nextConfig;
