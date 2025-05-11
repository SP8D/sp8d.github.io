import nextra from "nextra";

const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
};

const withNextraHOC = nextra(nextraConfig);

// Configure Next.js for static site generation and other options
const nextConfig = {
  output: "export",
  trailingSlash: true, // Moved here

  // If you use next/image, unoptimized is often needed for static exports
  // to avoid errors with the default image loader.
  images: {
    unoptimized: true,
  },

  // Note: pageExtensions is usually handled by Nextra.
  // Explicitly setting it here is generally not needed unless troubleshooting.
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default withNextraHOC(nextConfig);
