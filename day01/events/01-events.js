//引入events模块
var events = require("events");

//通过events模块创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//绑定data_received事件
eventEmitter.on("data_received",function () {
   console.log("数据接收成功！");
});


// 在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数，
// 回调函数接收错误对象作为第一个参数。
//绑定connection事件
eventEmitter.on("connection",function () {
    console.log("连接成功！");

    //触发 data_received事件
    eventEmitter.emit("data_received");
});

//触发 connection事件
eventEmitter.emit("connection");

console.log("程序执行完毕！");



