const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    mode: process.env.NODE_ENV || 'development',
    devtool: production ? false : 'source-map',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true,
        proxy: {
            '/api': {
                // it requires onstage-backend local installation, see https://github.com/rism-ch/onstage-backend
                // if you can access a remote endpoint with CORS enabled set the target below
                target: 'http://localhost:5000',
                // target: 'http://onstage-search.rism-ch.org'
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    },
    module: {
        rules: [
            {
                // this is so that we can compile any React,
                // ES6 and above into normal ES5 syntax
                test: /\.(js|jsx)$/,
                // we do not want anything from node_modules to be compiled
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.DefinePlugin({
            PRODUCTION: production,
            DEBUG: !production,
            DIVA_BASE_MANIFEST_SERVER: JSON.stringify('http://manifest.rism-ch.org/manifest/'),
            SOLR_BASE_SERVER: JSON.stringify('http://onstage-search.rism-ch.org'),
        })
    ]
};