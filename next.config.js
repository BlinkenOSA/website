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
    styledComponents: true,
    displayName: false
  },
  experimental: {
    scrollRestoration: true,
    largePageDataBytes: 128 * 5000,
  },
  output: "standalone"
})
