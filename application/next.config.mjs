/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  basePath: '/application', // your repo name
  assetPrefix: '/application/', // ensures CSS/JS load correctly
};

export default nextConfig;
