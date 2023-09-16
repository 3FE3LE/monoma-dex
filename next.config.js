const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  images: {
    domains: ['raw.githubusercontent.com'], 
  },
  reactStrictMode: true,
})
