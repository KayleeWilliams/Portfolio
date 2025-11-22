import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  rewrites() {
    return [
      {
        source: "/api/prawns/:path*",
        destination: "https://kaylee-europe-portfolio.c15t.dev/:path*",
      },
    ];
  },
};

export default withMDX(nextConfig);
