var foo = require('./foo.js'); //

//这里可以看出是，foo拿到的就是./foo.js中的module.exports对象。
console.log(foo);
/*console.log("foo:"+foo.foo);
console.log("name:"+foo.name);
console.log("add:"+foo.add(10,23));*/

