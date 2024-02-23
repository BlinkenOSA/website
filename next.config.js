module.exports = {
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
      },
    ],
  },
  experimental: {
    largePageDataBytes: 128 * 5000,
  },
}
