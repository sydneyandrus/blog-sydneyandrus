export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("source/css/");
};

export const config = {
  dir: {
    input: "source/",
  },
};
