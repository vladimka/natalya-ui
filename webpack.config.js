const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
let target = 'web';

if(process.env.NODE_ENV == 'production'){
    mode = 'production';
    target = 'browserslist'
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
];

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
            cacheDirectory: true,
            }
        }
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    }
]

module.exports = {
    entry : './src/index.js',

    mode, target,
    devtool : 'source-map',
    devServer : {
        hot : true
    },
    plugins,
    module: { rules },

    output : {
        clean : true,
        assetModuleFilename: 'assets/[hash][ext][query]',
        path : path.resolve(__dirname, 'dist')
    }
}