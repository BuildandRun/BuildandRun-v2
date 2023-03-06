//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('./with-nx.js');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  rewrites: async () => [
    {
      source: "/public/pricing/index.html",
      destination: "/pages/api/pricing.js",
    },
    {
      source: "/public/team/index.html",
      destination: "/pages/api/team.js",
    },
    {
      source: "/public/skB55L5WOPPK/success/index.html",
      destination: "/pages/api/success.js",
    },
    {
      source: "/public/email/b-n-r-v2.html",
      destination: "/pages/api/b-n-r-v2.js",
    },
  ],
};

module.exports = withNx(nextConfig);
