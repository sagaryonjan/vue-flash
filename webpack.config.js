let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let isTest = (process.env.NODE_ENV == 'test');
const merge = require('webpack-merge');

let config = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['vue-hot-reload-loader', 'babel-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-hot-reload-loader', 'vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    plugins: [

        new ExtractTextPlugin('[name].css'),

        new webpack.LoaderOptionsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compress: {
                warnings: false
            }
        })

    ],
};

if(isTest) {

    module.exports = merge(config, {
        entry: path.resolve(__dirname + '/src/index.js'),
        output: {
            filename: 'vue-flash.js',
            libraryTarget: 'umd',
            library: 'vue-flash',
            umdNamedDefine: true
        }
    });

} else  {


    module.exports = [
        merge(config, {
            entry: path.resolve(__dirname + '/src/index.js'),
            output: {
                filename: 'vue-flash.min.js',
                libraryTarget: 'window',
                library: 'VueFlash',
            }
        }),
        merge(config, {
            entry: path.resolve(__dirname + '/src/index.js'),
            output: {
                filename: 'vue-flash.js',
                libraryTarget: 'umd',
                library: 'vue-flash',
                umdNamedDefine: true
            }
        })
    ];



}
