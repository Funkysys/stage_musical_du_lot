/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://lestagemusicaldulot.fr',
  generateRobotsTxt: true,
}

module.exports = nextConfig
