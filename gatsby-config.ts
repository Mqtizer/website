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
      'MQTT Client',
      'Cross Platform MQTT',
      'IoT',
      'Industry 4.0',
      'Industrial IoT',
      'MQTT Broker',
      'Mobile MQTT Client',
      'Web MQTT Client',
      'Android MQTT Client',
      'iOS MQTT Client',
      'Desktop MQTT Client',
      'Windows MQTT Client',
      'Mac MQTT Client',
      'Linux MQTT Client',
      'Raspberry Pi MQTT',
      'MQTT Connectivity',
      'Industrial Grade MQTT',
      'Collaborative MQTT Client',
      'MQTT for IoT',
      'MQTT for Industry 4.0',
      'MQTT for Cross Platform',
      'MQTT for Mobile',
      'MQTT for Desktop',
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
          families: ['Nunito', 'Nunito:wght@0,200;1,200'],
          variants: ['100', '200', '300', '400', '500', '600'],
        },
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-mermaid',
            options: {
              launchOptions: {
                executablePath: process.env['CHROME_EXECUTABLE'],
              },
              mermaidOptions: {
                theme: 'forest',
                themeCSS: '.node rect { fill: #99CC00; }',
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
              wrapperStyle: (fluid: any) => `flex:${0.2};`,
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
