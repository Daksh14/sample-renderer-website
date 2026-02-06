import { createCmsProxy } from 'cms-renderer/lib/proxy';

export const proxy = createCmsProxy({
  upstream: "http://localhost:3000",
});

export const config = {
  matcher: [
    '/admin',
    '/admin/:path*',
    '/api/:path*',
    '/auth/:path*',
    '/_next/:path*',
    '/((?:.*\\.(?:css|js|map|png|jpg|jpeg|gif|svg|ico|webp|avif|woff|woff2|ttf|eot|txt|xml))$)',
  ],
};
