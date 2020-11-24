const markdownIt = require( "markdown-it" );
const markdownItAnchor = require( "markdown-it-anchor" );

module.exports = function( eleventyConfig ) {
  eleventyConfig.addLayoutAlias( "artikel", "layouts/posts.njk" );
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_includes/layouts'
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
	};
}
