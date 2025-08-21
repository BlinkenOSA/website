const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'osaarchivum.org'
      }, {
        protocol: 'https',
        hostname: '**.osaarchivum.org'
      }, {
        protocol: 'https',
        hostname: 'fortepan.download'
      }, {
        protocol: 'http',
        hostname: 'www.refugees1956.org'
      }, {
        protocol: 'http',
        hostname: '127.0.0.1'
      }
    ],
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    scrollRestoration: true,
    largePageDataBytes: 128 * 5000,
    optimizePackageImports: ['react-bootstrap', 'slick-carousel', 'next-translate', 'framer-motion', 'bootstrap']
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  async redirects() {
    // Fetch redirects from Strapi
    const res = await fetch(
      `${process.env.STRAPI_URL}/redirects`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY || ''}`,
        },
      }
    )

    if (!res.ok) {
      console.log(res)
      console.warn('⚠️ Could not fetch redirects from Strapi, skipping.')
      return []
    }

    const data = await res.json()

    // Map Strapi entries into Next.js redirects
    return data.data.map((item) => {
      const { From, To, StatusCode } = item.attributes
      return {
        source: From,            // "/old-path" or with wildcard: "/blog/:slug*"
        destination: To,         // "/new-path" or "/articles/:slug*"
        permanent: StatusCode === 301, // true = 301, false = 302
      }
    })
  },
  output: "standalone"
})
