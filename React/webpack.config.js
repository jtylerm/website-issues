var path = require('path');

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};