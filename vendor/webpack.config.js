const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
    },
    module: {
        rules: [
            {
                //que tipo ed archivo quiero reconocer
                test: /\.js$/,
                //que loader se va a encargar del archivo
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                },
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                    }
                }
            },
            //Aqui van los laoders
            {
                //que tipo ed archivo quiero reconocer
                test: /\.css$/,
                //que loader se va a encargar del archivo
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    //fallback: 'style-loader',
                    use: [
                        {
                         loader: 'css-loader',
                         options: {
                             modules: true,
                             importLoaders: 1
                         }   
                        },
                        'postcss-loader'
                    ]
                }),
            },
            {
                //que tipo ed archivo quiero reconocer
                test: /\.scss$/,
                //que loader se va a encargar del archivo
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    //fallback: 'style-loader',
                    use: ["css-loader", "sass-loader"]
                }),
            },
            {
                //que tipo ed archivo quiero reconocer
                test: /\.styl$/,
                //que loader se va a encargar del archivo
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    //fallback: 'style-loader',
                    use: [
                        "css-loader",
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [
                                    require('nib'),
                                    require('rupture')
                                ],
                                import : [
                                    '~nib/lib/nib/index.styl',
                                    '~rupture/rupture/index.styl'
                                ]
                            }
                        }]
                }),
            },
            {
                //que tipo ed archivo quiero reconocer
                test: /\.less$/,
                //que loader se va a encargar del archivo
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    //fallback: 'style-loader',
                    use: ["css-loader", {
                        loader: 'less-loader',
                        options: {
                            noIeCompat: true
                        }
                    }]
                }),
            }
        ]
    },
    plugins: [
        //aqui van los plugins
        new ExtractTextPlugin("css/[name].css")

    ],
    optimization: {
        splitChunks: {
            name: "common",
            chunks: "initial"
        }
    }
}