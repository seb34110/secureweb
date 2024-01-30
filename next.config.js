const dotenv = require("dotenv");

dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    KEY_SENDGRID: process.env.SENDGRID_API_KEY,
  },
};

module.exports = nextConfig;
