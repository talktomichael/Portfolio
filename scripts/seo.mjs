// Writes sitemap.xml and robots.txt into dist/ after the build.
// Set SITE_URL (e.g. https://michaelebong.com) to include absolute URLs.
import { writeFileSync } from 'node:fs'

const base = (process.env.VITE_SITE_URL || process.env.SITE_URL || '').replace(/\/$/, '')
const routes = [
  '/', '/about', '/philosophy', '/experience', '/case-studies', '/systems', '/contact',
  ...['people-operations-function', 'strategy-to-performance', 'custom-hris', 'learning-and-development', 'employee-enablement', 'structured-recruitment'].map((s) => `/case-studies/${s}`),
  ...['hris', 'scorecard', 'learning-hub', 'recruitment', 'analytics'].map((s) => `/systems/${s}`),
]

if (base) {
  const urls = routes.map((r) => `  <url><loc>${base}${r}</loc></url>`).join('\n')
  writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`)
  console.log(`sitemap.xml written for ${base}`)
} else {
  writeFileSync('dist/robots.txt', 'User-agent: *\nAllow: /\n')
  console.log('VITE_SITE_URL not set: robots.txt written without a sitemap. Set it once you have a domain.')
}

// Social previews need an absolute image URL.
if (base) {
  const { readFileSync } = await import('node:fs')
  const html = readFileSync('dist/index.html', 'utf8').replace('content="/og-image.jpg"', `content="${base}/og-image.jpg"`)
  writeFileSync('dist/index.html', html)
}
