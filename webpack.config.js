const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: './app.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './node_modules/toastr/build/toastr.min.css',
                to: './public/css'
            }
        ]),
        new ProgressBarPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};