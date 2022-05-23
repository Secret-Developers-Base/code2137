import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `code2137`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-leaflet",
    "gatsby-transformer-typescript-css-modules",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`righteous`, `roboto`, `league-spartan`],
        display: "swap",
      },
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-smoothscroll",
        "gatsby-transformer-typescript-css-modules",
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`righteous`, `roboto`, "Source Code Pro"],
                display: "swap",
            },
        },
        {
            resolve: `gatsby-plugin-sass-resources`,
            options: {
                resources: ["./src/styles/SASSResourceLoader.scss"],
            },
        },
    ],

};

export default config;
