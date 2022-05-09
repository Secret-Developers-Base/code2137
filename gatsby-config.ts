import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `code2137`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-transformer-typescript-css-modules",
        {
            resolve: `gatsby-plugin-sass-resources`,
            options: {
                resources: ["./src/styles/SASSResourceLoader.scss"],
            },
        },
    ],
};

export default config;
