module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: './',
          alias: {
            // '@/folder': './src/folder',
            '@/atoms': './src/components/atoms',
            '@/molecules': './src/components/molecules',
            '@/globals': './src/globals',
            '@/hocs': './src/hocs',
          },
        },
      ],
    ],
  };
};
