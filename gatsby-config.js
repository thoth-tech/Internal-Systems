/*
The getPlugins function dynamically output plugins from thot-tech repositories

How it works?
1) Copy and paste the function to a file such that it logs the output in the browser console
2) Once the browser page loads, copy the object from the console and paste it inside the plugins array

*Note
As of the moment, Gatsby does not allow async functions to run inside gatsby-config.js. This is why we come up with this alternative solution.
*/

// const getPlugins = async () => {
//   const modulePlugins = []
//   const url = "https://api.github.com/orgs/thoth-tech/repos"
//   const response = await fetch(url)
//   const result = await response.json()
//   result.forEach(repo => {
//     modulePlugins.push({
//       resolve: `gatsby-source-git`,
//       options: {
//         name: repo.name,
//         remote: repo.clone_url,
//       },
//     })
//   })
//   return modulePlugins
// }
// console.log(getPlugins())

const plugins = [
  {
    resolve: "gatsby-source-git",
    options: {
      name: "splashkit.io",
      remote: "https://github.com/thoth-tech/splashkit.io.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "splashkit-translator",
      remote: "https://github.com/thoth-tech/splashkit-translator.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "doubtfire-web",
      remote: "https://github.com/thoth-tech/doubtfire-web.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "entity-socket-demo",
      remote: "https://github.com/thoth-tech/entity-socket-demo.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "doubtfire-api",
      remote: "https://github.com/thoth-tech/doubtfire-api.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "splashkit-core",
      remote: "https://github.com/thoth-tech/splashkit-core.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "doubtfire-deploy",
      remote: "https://github.com/thoth-tech/doubtfire-deploy.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "doubtfire-speaker-verification",
      remote:
        "https://github.com/thoth-tech/doubtfire-speaker-verification.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "skm",
      remote: "https://github.com/thoth-tech/skm.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "git-workshop",
      remote: "https://github.com/thoth-tech/git-workshop.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "programming-arcana",
      remote: "https://github.com/thoth-tech/programming-arcana.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "DreamBig-Project",
      remote: "https://github.com/thoth-tech/DreamBig-Project.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "arcade-machine",
      remote: "https://github.com/thoth-tech/arcade-machine.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "arcade-games",
      remote: "https://github.com/thoth-tech/arcade-games.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "Jump",
      remote: "https://github.com/thoth-tech/Jump.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "doubtfire-overseer",
      remote: "https://github.com/thoth-tech/doubtfire-overseer.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "Tanks",
      remote: "https://github.com/thoth-tech/Tanks.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "doubtfire-deploy-GCP",
      remote: "https://github.com/thoth-tech/doubtfire-deploy-GCP.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "speaker-verification",
      remote: "https://github.com/thoth-tech/speaker-verification.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "speaker-verification-api",
      remote: "https://github.com/thoth-tech/speaker-verification-api.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "documentation",
      remote: "https://github.com/thoth-tech/documentation.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "doubtfire.io",
      remote: "https://github.com/thoth-tech/doubtfire.io.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "Internal-Systems",
      remote: "https://github.com/thoth-tech/Internal-Systems.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "jupyter-notebook-prototype",
      remote: "https://github.com/thoth-tech/jupyter-notebook-prototype.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: ".github",
      remote: "https://github.com/thoth-tech/.github.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "build-a-game-team",
      remote: "https://github.com/thoth-tech/build-a-game-team.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "ChatHistoryDisplayer",
      remote: "https://github.com/thoth-tech/ChatHistoryDisplayer.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "build-a-game-team-1",
      remote: "https://github.com/thoth-tech/build-a-game-team-1.git",
    },
  },
  {
    resolve: "gatsby-source-git",
    options: {
      name: "build-a-game-team-2",
      remote: "https://github.com/thoth-tech/build-a-game-team-2.git",
    },
  },
]

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
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
      resolve: "gatsby-source-git",
      options: {
        name: "handbook",
        remote: "https://github.com/thoth-tech/handbook.git",
        branch: "main",
        patterns: "docs/**",
      },
    },
    ...plugins,
  ],
}
