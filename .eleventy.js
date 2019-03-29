module.exports = function(config) {
   
    config.addCollection('posts', collection => {
      return collection.getFilteredByGlob('posts/*.md');
    });

    return {
        dir: {
          input: ".",
          output: "dist",
          includes: "templates"
        },
        templateFormats : ["html", "md"],
        htmlTemplateEngine : "liquid",
        markdownTemplateEngine : "liquid"
      };
}