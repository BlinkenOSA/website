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
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  output: "standalone"
})
