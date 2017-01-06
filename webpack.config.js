module.exports = {
    entry: './app.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};