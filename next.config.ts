import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://ngudmi35xl.ufs.sh/**"),
      new URL("https://w61pzgbhdn.ufs.sh/**"),
    ],
  },
};

export default nextConfig;
