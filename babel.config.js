module.exports = api => {
  const presets = ['@babel/env'];

  api.cache(true);

  return {
      presets,
  };
};