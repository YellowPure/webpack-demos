var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/app.jsx',
    output:{
        path:'./bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
}