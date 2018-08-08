const path = require ('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:path.resolve(__dirname,'index.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
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
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
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