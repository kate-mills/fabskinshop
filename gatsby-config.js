require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = `https://fabskinshop.netlify.app` //change to .com url
const netlifyUrl = `https://fabskinshop.netlify.app`
const companyName = `Fab Skin Shop`
const description = `${companyName} - Schedule Now! Our treatments include makeup, eyelash extensions, waxing, tinting, & facial rejuvenation spa treatments. We serve Napa, CA and surrounding areas.`

module.exports = {
  siteMetadata: {
    author: `kate-mills`,
    altUrl: `${netlifyUrl}`,
    dateModified: `${new Date().toISOString()}`,
    image: `/images/default-image.jpg`, // ./static/images/
    siteUrl: `${siteUrl}`,
    title: `${companyName}`,
    twitterUsername: `@gatsbyjs`,

    organization: {
      address: {
        name: `${companyName}`,
        street: `1812 Jefferson St.`,
        city: `Napa`,
        state: `CA`,
        zip: `94558`,
        country: `USA`,
      },
      description: `${description}`,
      email: `mailto:esty@fabskinshop.com`,
      displayEmail: {
        prefix: `esty`,
        suffix: `@fabskinshop`,
        ext: `.com`,
      },
      geo: {
        lat: 38.30418834186992,
        long: -122.29412004433584,
      },
      logo: `${siteUrl}/images/logo.png`, // ./static/images/
      name: `${companyName}`,
      phone: `+1-707-266-8106`,
      displayPhone: `(707) 266-8106`,
      priceRange: `$$$`,
      otherUrls: [
        `https://www.facebook.com/pages/allydigitalsolutions`,
        `http://www.yelp.com/biz/hilary-molloy-napa`,
        `https://instagram.com/allydigitalsolutions`,
      ],
      url: `${siteUrl}`,
    },
  },
  plugins: [
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
        name:  `${companyName}`,
        short_name: `Fab Skin`,
        start_url: `/`,
        description: `${description}`,
        background_color: `#ffb1b1`,
        theme_color: `#ffb1b1`,
        display: `minimal-ui`,
        icon: `src/images/new-icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${siteUrl}`,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY, 
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_SEO_BUSINESS_BASE_ID,
            tableName: `SuperSkinSpa`,
          },
        ]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    `gatsby-plugin-netlify`, //keep last
  ],
  flags: { DEV_SSR: false }
}
