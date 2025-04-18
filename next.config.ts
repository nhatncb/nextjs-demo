import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Your existing next config
  output: 'standalone',
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};
/*
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};
*/
// Make sure adding Sentry options is the last code to run before exporting
export default nextConfig;
