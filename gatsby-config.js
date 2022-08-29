/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

console.log(__dirname)
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-theme-material-ui`,
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `placeholder`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `repo-one`,
        remote: `https://github.com/thoth-tech/handbook.git`,
        branch: `main`,
        // Only import the docs folder from a codebase.
        patterns: `docs/**`,
      },
    },
  ],
}
