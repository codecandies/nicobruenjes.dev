const markdownIt = require( "markdown-it" );
const markdownItAnchor = require( "markdown-it-anchor" );
const markdownItContainer = require('markdown-it-container');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function( eleventyConfig ) {

  eleventyConfig.addPassthroughCopy('src/css/fonts/')
  eleventyConfig.setDataDeepMerge(true);

  let markdownItOptions = {
    html: true,
    linkify: true,
    typographer: true
  };

  let markdownLib = markdownIt(markdownItOptions)
    .use(markdownItContainer, 'warning' )
    .use(markdownItContainer, 'tip' )
    .use(markdownItAttrs, {
      leftDelimiter: '{:',
      rightDelimiter: '}',
      allowedAttributes: ['id', 'class', /^data\-.*$/],
    });

  eleventyConfig.setLibrary('md', markdownLib);

  return {
    dir: {
      input: 'src',
      output: '_site',
      data: "_data",
      includes: '_includes',
      layouts: '_includes/layouts'
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk',
	};
}
