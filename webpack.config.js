var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader']
                })
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.(eot|svg|cur)$/,
                loader: 'file-loader',
                options: {
                    name: `[name].[hash].[ext]`,
                    limit: 10000
                }
            },
            {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                loader: 'url-loader',
                options: {
                    name: `[name].[hash].[ext]`,
                    limit: 10000
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new ExtractTextPlugin("styles.css")
    ],

    stats: {
        colors: true,
        reasons: true
    },

    devServer: {
        historyApiFallback: true,
        stats: {
            colors: true,
            reasons: true
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};