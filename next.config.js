/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RPC_ENDPOINT: process.env.RPC_ENDPOINT,
        SINGLE_COLLATERAL_REGISTRY: process.env.SINGLE_COLLATERAL_REGISTRY
    }
}

module.exports = nextConfig
