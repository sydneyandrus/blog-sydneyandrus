export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("source/css/");
  eleventyConfig.addPassthroughCopy("source/images/");
};

export const config = {
  dir: {
    input: "source/",
  },
};