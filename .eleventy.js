module.exports = function(config) {
   
    config.addCollection('posts', collection => {
      return collection.getFilteredByGlob('posts/*.md');
    });
    config.addCollection('sponsors', collection => {
      return collection.getFilteredByGlob('sponsors/*.md');
    });

    config.addFilter("slice", require("./filters/slice.js"));
    config.addFilter("lookup", require("./filters/lookup.js"));
    config.addFilter("contents", require("./filters/contents.js"));
    config.addPassthroughCopy("images");
    config.addPassthroughCopy("./admin");

    return {
        dir: {
          input: ".",
          output: "dist",
          includes: "templates"
        },
        templateFormats : ["html", "md", "css", "liquid"],
        htmlTemplateEngine : "liquid",
        markdownTemplateEngine : "liquid"
      };
}