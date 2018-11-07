

// 路径形式的模块
//   	./		当前目录，不可省略
// 		../		上一级目录，不可省略		
// 		/xxx	几乎不用		首位的/在这里表示的是当前文件模块所属磁盘根路径	
// 		D:a/b/	几乎不用
// var foo = require('./foo'); 



// 核心模块  本质也是文件。
// 核心文件已经被编译到了二进制文件中，我们只需要按照名字来加载就可以了。

// 第三方模块
// 凡是第三方模块必须通过npm来下载
// 使用的时候就可以通过require('包名')的方式来进行加载才可以使用。
// 不可能有任何一个第三方和核心模块的名字是一样的。
// 既不是核心模块，也不是路径模块
//		先找当前文件所处的目录的node_modules目录，
//		然后找node_modules/art-template目录
//		再找node_modules/art-template/package.json
// 		再找node_modules/art-template/package.json文件中的main属性。
// 		main属性中就记录了当前模块（art-template）的入口模块。
// 		然后加载使用这个第三方包，实际上最终加载的还是文件。

// 	如果package.json文件不存在或者main指定的入口模块是错的，
//  则node会默认自动找该目录下index.js,也就是说index.js会作为一个默认备选项。

// 	如果以上所有任何一个条件都不成立，则会进入上一级目录中的node_modules目录执行查找。
// 	如果上一级没有，则往上上一级查找
//  。。。。
// 	如果直到当前磁盘根目录还找不到，最后报错。can not find module.

// 	注意：我们的一个项目中有且仅有一个node_modules目录，不会出现多个。
// 			放在项目的根目录中，这样的话项目中的所有的子目录的代码都可以加载到第三方包。
var template = require('art-template');

