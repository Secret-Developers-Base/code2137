import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `code2137`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-smoothscroll",
        "gatsby-transformer-typescript-css-modules",
        {
            resolve: `gatsby-plugin-sass-resources`,
            options: {
                resources: ["./src/styles/SASSResourceLoader.scss"],
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
    ],
};

export default config;
