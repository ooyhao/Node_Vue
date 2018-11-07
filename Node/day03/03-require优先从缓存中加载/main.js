//优先从缓存中加载
//由于a.js中已经加载了b.js,所以在main.js中不会重复加载
// 可以拿到其中的接口对象，但不会重复去执行代码。
// 这样做的目的是为了避免重复加载，提高模块加载效率。

require('./a.js');
var fn = require('./b.js');

console.log(fn);
