var buffer = Buffer.from("ouYang","ascii");

//按字符格式输出
console.log(buffer.toString());
//将二进制数据转为十六进制
console.log(buffer.toString('hex'));//6f7559616e67
//将二进制数据转为base64
console.log(buffer.toString('base64'));//b3VZYW5n