import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `MQTIZER | MQTT Client`,
    siteUrl: `https://www.mqtizer.com`,
    description: `Cross Platform, Mobile first, collaborative Industrial grade MQTT Client for IoT and Industry 4.0. Batteries included`,
    linkedInUsername: `sanyam-arya`,
    twitterUserName: `sanyamarya`,
    image: '/seoThumbnail.png',
    keyWords: [
      'MQTT',
      'MQTT Client',
      'MQTT Client for Web',
      'MQTT Client for Browser',
      'MQTT Client for Mobile',
      'MQTT Client for Android',
      'MQTT Client for iOS',
      'MQTT Client for iPhone',
      'MQTT Client for iPad',
      'MQTT Client for Tablet',
      'MQTT Client for Desktop',
      'MQTT Client for Windows',
      'MQTT Client for Mac',
      'MQTT Client for Linux',
      'MQTT Client for Ubuntu',
      'MQTT Client for Fedora',
      'MQTT Client for Debian',
      'MQTT Client for CentOS',
      'MQTT Client for Red Hat',
      'MQTT Client for SUSE',
      'MQTT Client for OpenSUSE',
      'MQTT Client for Raspbian',
      'MQTT Client for Raspberry Pi',
      'MQTT Client for Android',
      'Connect to MQTT Broker',
      'MQTT Broker',
      'Cross Platform MQTT Client',
      'MQTT Client for Cross Platform',
      'Internet of Things',
      'IoT',
      'MQTT Client for IoT',
      'MQTT Client for Internet of Things',
      'Industrial Internet of Things',
      'Industry 4.0',
      'MQTT Client for Industry 4.0',
      'MQTT Client for Industrial IoT',
      'MQTT Client for Industrial Internet of Things',
      'MQTT Client for IIoT',
      'Industry grade MQTT Client',
    ],
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
        name: `MQTIZER | MQTT Client`,
        short_name: `MQTIZER`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#FEFEFE`,
        theme_color: `#353D69`,
        lang: `en`,
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
        name: 'content',
        path: './src/content/',
      },
      __key: 'content',
    },
  ],
}

export default config
