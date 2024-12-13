const path = require('path');  // Import path module

module.exports = {
  entry: './js/main.ts',  // Use the correct relative path
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
