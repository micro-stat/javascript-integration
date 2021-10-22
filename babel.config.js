module.exports = api => {
  const presets = [];
  presets.push('@babel/env');
  api.cache(true);
  return {
      presets,
  };
};