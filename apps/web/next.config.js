import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'website',
    '@repo/cms-schema',
    '@repo/supabase-utils',
    '@repo/markdown-wasm',
    '@auteur/trpc-utils',
  ],
  serverExternalPackages: ['md4w'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
  turbopack: {
    root: resolve(__dirname, '../../..'),
    resolveAlias: {
      'website/lib/*': ['cms/apps/website/lib/*'],
      'website/components/*': ['cms/apps/website/components/*'],
      'website/server/*': ['cms/apps/website/server/*'],
    },
  },
};

export default nextConfig;
