const path = require ('path');

module.exports = {
    entry:path.resolve(__dirname,'index.js'),
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, "/"),
      // compress: true,
      port: 8080,
      open: true, 
      // after(app){
      //   console.log('======== after ==========')
      //   console.log(app)
      //   // do fancy stuff
      // },
      // before(app) {
      //   console.log('======== before =========')
      //   console.log(app)
      // }
    },
    module: {
        rules: [
            //Aqui van los laoders
            {
                //que tipo ed archivo quiero reconocer
                test:  /\.css$/,
                //que loader se va a encargar del archivo
                use: ['style-loader','css-loader'],
            }
        ]
    }
}