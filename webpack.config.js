var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    devtool: 'source-map',
    entry: "./source/javascript/index.jsx",
    output: {
        path: path.join(__dirname, 'static/js'),
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
    plugins: [
        new CommonsChunkPlugin('init.js'),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
        //new webpack.DefinePlugin({
        //    __DEVELOPMENT__: true,
        //    __DEVTOOLS__: true
        //})
    ]
}