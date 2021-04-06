const path = require('path');

// Retrieve env variables
const NODE_ENV = process.env.NODE_ENV || "development";

// Get package.json content
const cwd = process.cwd();
const pkg = require(path.resolve(cwd, "package.json"));

// Output file
const modulePath = path.resolve(cwd, pkg.module || `index.js`);
const filename = modulePath.replace(/^.*[\\\/]/, '')

module.exports = {
    mode: NODE_ENV,
    output: {
        path: path.resolve('dist'),
        filename: filename,
        library: {
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