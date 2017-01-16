const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const https = require('https');
const fs = require('fs-extra');
const path = require('path');

const bootstrapPath = path.normalize('./build/public/css/bootstrap.min.css');
const file = fs.createWriteStream(bootstrapPath);

https.get('https://bootswatch.com/paper/bootstrap.min.css', (response) => {
    response.pipe(file);

    file.on('finish', function() {
        file.close();
    });
}).on('error', function() {
    fs.unlink(bootstrapPath);
});

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
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new ProgressBarPlugin()
    ]
};