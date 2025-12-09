module.exports = {
  presets: [
    [
      'module:@react-native/babel-preset',
      // Bundling fails with this:
      // { disableImportExportTransform: true }
    ]
  ],
};
