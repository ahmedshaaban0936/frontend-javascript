const path = require('path');

module.exports = {
  entry: './js/main.ts', // Ensure this matches your main TypeScript file's location
  output: {
    filename: 'bundle.js', // Ensure this is named correctly
    path: path.resolve(__dirname, 'dist'), // Ensure this matches your output folder
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
  mode: 'development',
};
