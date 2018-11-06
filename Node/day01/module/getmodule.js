/*var myModule = require("./module");
myModule.setName("BYVoids");
myModule.sayHello();*/
/*
*
* 在以上示例中，module.js 通过 exports 对象把 setName 和 sayHello 作为模块的访
  问接口，在 getmodule.js 中通过 require('./module') 加载这个模块，然后就可以直接访
  问 module.js 中 exports 对象的成员函数了。
* */



// var Hello = require("./singleobject").Hello;
var Hello = require("./hello");
var hello  = new Hello();
hello.setName("nana");
hello.sayHello();


/**
 * 注意，模块接口的唯一变化是使用 module.exports = Hello 代替了 exports.Hello=
     Hello。在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的
     exports。
     事实上，exports 本身仅仅是一个普通的空对象，即 {}，它专门用来声明接口，本
     质上是通过它为模块闭包的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，
     所以可以用其他东西来代替，譬如我们上面例子中的 Hello 对象。
 */

/**
  *  不可以通过对  exports 直接赋值代替对  module.exports 赋值。
     exports 实际上只是一个和 module.exports 指向同一个对象的变量，
     它本身会在模块执行结束后释放，但  module 不会，因此只能通过指定
     module.exports 来改变访问接口。
 */

