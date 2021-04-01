const path = require('path');


module.exports = {

    context: __dirname,
    entry: './frontend/painterest.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    // target: 'web',
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
        extensions: [".js", ".jsx", "*"],
        fallback: {
            "path": false, //require.resolve("path-browserify"),
            "crypto": false, //require.resolve("crypto-browserify"),
            "https": false, //require.resolve("https-browserify"),
            "http": false, //require.resolve("stream-http"),
            "vm": false, //require.resolve("vm-browserify"),
            "os": false, //require.resolve("os-browserify/browser"),
            "fs": false,
            "stream": false, //require.resolve("stream-browserify"),
            "worker_threads": false,
            "child_process": false,
            "constants": false,//require.resolve("constants-browserify"),
            "pnpapi": false 
        }
    },
    // resolve: {
    //     // ... rest of the resolve config
    //     fallback: {
    //         "path": require.resolve("path-browserify")
    //     }
    // }
    // resolve: {
    //     // modules: [...],
    //     fallback: {
    //         "fs": false,
    //         "tls": false,
    //         "net": false,
    //         "path": false,
    //         "zlib": false,
    //         "http": false,
    //         "https": false,
    //         "stream": false,
    //         "crypto": false,
    //         "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    //     }
    // },
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