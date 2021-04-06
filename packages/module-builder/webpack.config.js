const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'foundation-core.js',
        library: {
            name: 'foundation',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            }
        ],
    },
    externals: {
        // @TODO: Explain this !!!
        "react-router-dom": "react-router-dom",
        react: "react",
        "react-dom": "react-dom",
    }
};