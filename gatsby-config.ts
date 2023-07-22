import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  pathPrefix: `/website`,
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
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
  ],
}

export default config
