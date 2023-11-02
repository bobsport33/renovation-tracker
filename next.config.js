/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
            fileName: true,
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    serverRuntimeConfig: {
        connectionString: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sandbox.yc4p2.mongodb.net/reno?retryWrites=true&w=majority`,
        secret: `${process.env.DB_CONNECTION_STRING}`,
    },
};

module.exports = nextConfig;
