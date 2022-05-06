/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains:["https://127.0.0.1:8000"]
  }
}

module.exports = nextConfig
