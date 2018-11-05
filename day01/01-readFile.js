var fs = require("fs");

fs.readFile("./data/r1ead.txt",function (error,data) {
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
});