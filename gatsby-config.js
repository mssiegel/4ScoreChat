module.exports = {
  siteMetadata: {
    title: `4ScoreChat`,
    description: `4ScoreChat lets you pick a character and instantly start chatting with a stranger. It's the perfect place to exercise your imagination in a family-friendly way.`,
    author: `Moshe Siegel`,
    siteUrl: 'https://www.4scorechat.com/',
    thumbnailImage: '/ogThumbnail/wizard-hat-thumbnail.jpg',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wizard-hat.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-3W8LLPTQLC',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/private-rooms/*`] },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
