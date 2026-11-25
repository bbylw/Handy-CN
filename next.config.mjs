import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  // emit /docs/index.html style paths so static hosts (GitHub Pages) resolve them
  trailingSlash: true,
  reactStrictMode: true,
};

export default withMDX(config);
