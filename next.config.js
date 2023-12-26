/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
//Khi chạy ứng dụng Next.js, nó sẽ tự động phát hiện và sử dụng cấu hình từ 
//file next.config.js mà không cần bạn sử dụng require() 
//hoặc import từ các module khác.