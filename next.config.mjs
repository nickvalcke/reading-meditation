/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project. A stray package-lock.json in the
  // home directory otherwise makes Next infer ~ as the root and file-watch the
  // entire home folder, which can exhaust file descriptors and crash dev.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
