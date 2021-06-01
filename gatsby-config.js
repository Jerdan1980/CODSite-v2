const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'CODSite',
		description: `your source of all things chemistry`,
		author: `Jerdan1908 and friends`,
  },
  plugins: [
		
		/* no idea what this does */
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		/* name folders for quick querying */
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/courses/Bronze`,
				name: `Bronze`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/courses/Silver`,
				name: `Silver`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/courses/Gold`,
				name: `Gold`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/guides`,
				name: `guides`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/FAQ`,
				name: `FAQ`,
			},
		},
		/* MDX setup */
		{
			resolve: "gatsby-plugin-page-creator",
			options: {
				path: `${__dirname}/content`,
			}
		},
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { 
					default: path.resolve('./src/components/layout.js') 
				},
      },
    },
		/* Styling */
		'gatsby-plugin-postcss',
		/* something something idk */
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
