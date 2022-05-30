module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@contexts': './src/contexts',
          '@services': './src/services',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
