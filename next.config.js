/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RPC_ENDPOINT: process.env.RPC_ENDPOINT,
    }
}

module.exports = nextConfig
