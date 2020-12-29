const markdownIt = require( "markdown-it" );
const markdownItAnchor = require( "markdown-it-anchor" );
const markdownItContainer = require('markdown-it-container');
const markdownItAttrs = require('markdown-it-attrs');
const implicitFigures = require('markdown-it-implicit-figures');

module.exports = function( eleventyConfig ) {

  eleventyConfig.addPassthroughCopy('src/css/fonts/');
  eleventyConfig.addPassthroughCopy({'src/_assets/img/': 'img'});
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
      allowedAttributes: ['id', 'class', /^data\-.*$/, 'loading'],
    })
    .use(implicitFigures, {
      figcaption: true
    });

  eleventyConfig.setLibrary('md', markdownLib);

  return {
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: '_site',
      data: "_data",
      includes: '_includes',
      layouts: '_includes/layouts'
    }
	};
}
