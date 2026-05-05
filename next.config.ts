import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";


const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withFlowbiteReact(nextConfig);