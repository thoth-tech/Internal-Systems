module.exports = {
    siteMetadata: {
      title: `internal-systems`,
      siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
  };