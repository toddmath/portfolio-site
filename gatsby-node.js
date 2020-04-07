/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Fixes `gatsby build` command that complains about missing `window` object.
 * @see {@link https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules}
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /miniraf/,
            use: loaders.null(),
          },
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
