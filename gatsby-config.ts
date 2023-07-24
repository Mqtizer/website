import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `MQTIZER | MQTT Client`,
    siteUrl: `https://www.mqtizer.com`,
    description: `MQTT Client for Web`,
    hiddenDescription: `MQTIZER is a MQTT Client for Web. It is a web application that allows you to connect to a MQTT broker and publish/subscribe to MQTT topics.`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito'],
        },
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-scroll-reveal-with-new-react`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'features',
        path: './src/content/features/',
      },
      __key: 'features',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about',
        path: './src/content/about/',
      },
      __key: 'about',
    },
  ],
}

export default config
