var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    devtool: 'source-map',
    entry: "./source/index.jsx",
    output: {
        path: path.join(__dirname, 'static'),
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            'redux': path.join(__dirname, 'node_modules/redux')
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: '/node_modules/',
                loader: 'babel'
            },
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
    plugins: [
        new CommonsChunkPlugin('init.js'),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        //new webpack.DefinePlugin({
        //    __DEVELOPMENT__: true,
        //    __DEVTOOLS__: true
        //})
    ]
}