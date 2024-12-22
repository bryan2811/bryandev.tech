module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://devsilv.com/',
        permanent: true,
      },
    ]
  },
}