const path = require('path');
module.exports = {
  entry: './src/hex-verter/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};