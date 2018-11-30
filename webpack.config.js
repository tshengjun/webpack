
const path = require('path');

//--- 启动热更新第二步
const webpack = require('webpack');

//--- 导入在内存中生成 html 页面的插件
//--- 这个插件的两个作用
//--- 1. 自动在内存中根据指定的页面生成一个内存的页面
//--- 2. 自动把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');

//--- 这个配置文件，其实就是一个 js 文件，通过 Node 中的模块操作，向外暴露了一个配置对象
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),//--- 入口，表示需要使用 webpack 打包哪个文件
    output: {
        path: path.join(__dirname,'./dist'),   //--- 指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js'                  //--- 这是指定输出的文件的名称
    },
    devServer: {  //--- 这是devServer的第二种配置方式，
        // --open --port 3000 --contentBase src --hot
        open: true, //--- 自动打开浏览器
        port: 3000, //--- 设置启动时候的端口
        contentBase: 'src', //--- 指定托管的目录
        hot: true //--- 启用热更新
    },
    //--- 只要是插件，都一定要放到 plugins 中，
    plugins: [  //--- 配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //--- 启动热更新第三步
        new htmlWebpackPlugin({     //--- 创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, './src/index.html'),//--- 指定模板页面，将来会根据指定的页面路径去生成内存中的页面
            filename: 'index.html'     //--- 指定生成页面的名称
        })
    ],
    module: {  //--- 这个节点，用于配置所有第三方模块加载器
        rules: [  //--- 所有第三方模块的匹配规则
            { test: /\.css$/,  use: ['style-loader', 'css-loader'] },  //--- 配置处理 .css 文件的第三方 loader 规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//--- 配置处理 .less 文件的第三方 loader 规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //--- 配置处理 .scss 文件的第三方 loader 规则
            { test: /\.(png|jpg|jpeg|gif|bmp)$/, use: 'url-loader?limit=1024&name=[hash:8]-[name].[ext]' }, //--- 处理图片路径的 loader 
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loder' },  //--- 处理文件字体的 loader  
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } //--- 
        ]
    }
}