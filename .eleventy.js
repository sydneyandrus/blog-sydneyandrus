module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/main.css");
  eleventyConfig.addPassthroughCopy("css/content.css");
  eleventyConfig.addPassthroughCopy("css/homepage.css");
  eleventyConfig.addPassthroughCopy("css/directory.css");
};