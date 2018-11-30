//  这是 main.js 是我们项目的js入口文件

//  1. 导入 jQuery
//  import *** from *** 是ES6中导入模块的方式
import $ from 'jquery';

//--- 使用 import 语法，导入样式表
//--- 注意：webpack默认只能打包处理 JS 类型的文件，无法处理其它非 JS 的文件；
//--- 如果要处理非 JS 的文件，我们需要手动安装一些 合适第三方 loader 加载器
//--- 如果想要打包处理 css 文件，需要安装 npm i style-loader css-loader --save-dev
//--- 打开 webpack.config.js 这个配置文件，在里面新增一个配置节点，叫作 module ，他是一个对象，在这个 module 对象身上，有个 rules 属性，这个属性是一个数组；这个数组中存放了所有第三方文件的匹配和处理规则
import './css/index.css';
import './css/index.less';
import './css/index.scss';

//---  class 关键字，是 ES6 的新语法，是用来实现 ES6 中面向对象编程的方式
class Person {
    //--- 使用 static 关键字可以定义静态属性
    //--- 所谓的静态属性，就是可以直接通过类名，直接访问的属性
    //--- 实例属性：只能通过类的实例，来访问的属性，叫作实例属性
    static info = { name: 'zs', age: 18 };
}
console.log(Person.info);
//--- 在 webpack 中，默认只能处理一部分 ES6 语法，一些更高级的 ES6 或者 ES7 语法，webpack 是处理不了的，这时候就需要借助第三方的 loader 来帮助 webpack 处理这些高级的语法，当第三方 loader 把高级语法转为低级语法之后，会把结果交给 webpack 去打包到 bundle.js 中

//--- 1.在 webpack 中，可以运行如下两套命令，安装两套包，去安装 babel 相关的 loader 功能
//--- 1.1 第一套包：npm i babel-core babel-loader babel-plugin-transform-runtime -D
//--- 1.2 第二套包：npm i babel-preset-env babel-preset-stage-0 -D
//--- 2. 打开 webpack 的配置文件，在 module 节点下的 rules 数组中，添加一个新的匹配规则：
//--- 2.1 { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
//--- 2.2 注意：在配置 babel 的 loader 规则的时候，必须吧 node_modules 目录，通过 exclude 选项排除掉，原因有两个：
//--- 2.2.1 如果不排除 node_moudles ，则 babel 会把 node_modules 中所有的第三方 JS 文件都打包编译，这样会非常消耗 cpu ，打包速度也会非常慢。
//--- 2.2.2 哪怕最终 babel 把所有 node_modules 中的 JS 转换完毕了，但是项目也无法运行
//--- 3. 在项目的根目录中，新建一个叫作 .babelrc 的 babel 配置文件，这个配置文件，属于 json 格式，所以在写 .babelrc 配置的时候必须符合 json 语法规范
//--- 3.1 在 .babelrc 写如下的配置
// {
//     "presets": ["env", "stage-0"],
//     "plugins": ["transform-runtime"]
// }

$(function (){
     $('li:odd').css('background','pink');
     $('li:even').css('background','#ff7651');
});