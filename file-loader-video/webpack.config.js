const path = require ('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:path.resolve(__dirname,'src/js/index.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath: './dist/'
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
    },
    module: {
        rules: [
            {
                //que tipo ed archivo quiero reconocer
                test:  /\.js$/,
                //que loader se va a encargar del archivo
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'assets/[name].[hash].[ext]'
                    }
                }
            }
            ,
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },
            //Aqui van los laoders
            {
                //que tipo ed archivo quiero reconocer
                test:  /\.css$/,
                //que loader se va a encargar del archivo
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    //fallback: 'style-loader',
                    use: "css-loader"
                }),
            }
        ]
    },
    plugins:[
        //aqui van los plugins
        new ExtractTextPlugin("css/[name].css")

    ]
}