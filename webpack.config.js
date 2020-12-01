const path = require('path');


module.exports = {

    context: __dirname,
    entry: './frontend/painterest.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    target: 'web',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
        },

        // {
        //     test: /\.(png|svg|jpe?g|gif)$/,
        //     include: /images/,
        //     use: [
        //         {
        //             loader: 'file-loader',
        //             options: {
        //                 name: '[name].[ext]',
        //                 outputPath: 'images/',
        //                 publicPath: 'images/'
        //             }
        //         }
        //     ]
        // },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true
                    }
                },
                // Compiles Sass to CSS
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }
            ],
        }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
};

// const path = require('path');

// module.exports = {
//     // context: __dirname,
//     entry: './frontend/painterest.jsx',
//     output: {
//         path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//         filename: 'bundle.js'
//         // path: path.resolve(__dirname, 'dist')
//     },
//     devtool: 'source-map',
//     module: {
//         rules: [{
//             test: /\.jsx?$/,
//             // enforce: "pre",
//             exclude: /(node_modules)/,
//             use: {
//                 loader: 'babel-loader',
//                 // loader: "jshint-loader",
//                 // options: {  // ⬅ formally jshint property
//                 //     camelcase: true,
//                 //     emitErrors: false,
//                 //     failOnHint: false
//                 // },
//                 query: {
//                     presets: ['@babel/env', '@babel/react']
//                 }
//             },
//         }]
//     },
    
//     resolve: {
//         extensions: [".js", ".jsx", "*"]
//     },
// };