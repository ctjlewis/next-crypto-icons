module.exports = {
  images: {
    domains: ['cdn.jsdelivr.net']
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    // externalDir: true,
  },
  webpack: (config = {}) => {
    // config.experiments = { topLevelAwait: true };
    // config.resolve.fallback = {
    //   assert: false,
    //   process: false,
    //   events: false,
    //   fs: false,
    //   util: false,
    //   path: false,
    //   stream: false,
    //   constants: false,
    //   os: false,
    // };
    return config;
  },
}
