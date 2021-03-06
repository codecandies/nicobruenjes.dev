const implicitFigures = require('markdown-it-implicit-figures');
const markdownIt = require( "markdown-it" );
const markdownItAnchor = require( "markdown-it-anchor" );
const markdownItContainer = require('markdown-it-container');
const markdownItTocDoneRight = require( "markdown-it-toc-done-right" );
const markdownItAttrs = require('markdown-it-attrs');
const prism = require('markdown-it-prism');
const markDownItAttribution = require('markdown-it-attribution');

module.exports = function( eleventyConfig ) {

  eleventyConfig.addPassthroughCopy({'src/_assets/css/fonts/': 'css/fonts'});
  eleventyConfig.addPassthroughCopy({'src/_assets/img/': 'img'});
  eleventyConfig.addPassthroughCopy({'src/_assets/js/': 'js'});
  eleventyConfig.setDataDeepMerge(true);

  let markdownItOptions = {
    html: true,
    linkify: true,
    typographer: true
  };

  let markdownLib = markdownIt(markdownItOptions)
    .use(markdownItContainer, 'warning' )
    .use(markdownItContainer, 'tip' )
    .use(markdownItContainer, 'copyright' )
    .use(markdownItAttrs, {
      leftDelimiter: '{:',
      rightDelimiter: '}',
      allowedAttributes: ['id', 'class', /^data\-.*$/, 'loading'],
    })
    .use(implicitFigures, {
      figcaption: true
    })
    .use(prism, {
      defaultLanguageForUnknown: 'jinja2',
      defaultLanguageForUnspecified: 'js'
    })
    .use( markdownItAnchor, {
      permalink: true, // add anchors to headings
      permalinkBefore: false, // after the heading
      permalinkSymbol: "#"
    })
    .use( markDownItAttribution )
    .use( markdownItTocDoneRight, {level: 2} );

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
