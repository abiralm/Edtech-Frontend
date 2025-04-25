import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    // BASE_URL: 'http://192.168.1.76:8081'
    BASE_URL: 'http://192.168.1.109:8081',
    AUTH_SECRET:"7aWpG7/dIR+TvKI5KGkt5hpHWqGs49Lb6WVvrxtGglU="
  }
};

export default nextConfig;
