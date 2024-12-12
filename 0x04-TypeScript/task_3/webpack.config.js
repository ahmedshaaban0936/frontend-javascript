const path = require('path');

module.exports = {
  entry: './js/main.ts', // Entry point of the application
  output: {
    filename: 'bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these file types
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply ts-loader to .ts files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production', // Production mode for optimized builds
};
