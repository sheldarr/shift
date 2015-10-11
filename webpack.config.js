module.exports = {
    entry: './app.jsx',
    output: {
        filename: 'bundle.js', 
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}