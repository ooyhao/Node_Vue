var express = require('express');

var app = express();

app.listen(3333,function(){
	console.log('app is running at port 3333 ');
});	


app.get('/',function(req,res){

	res.send('Hello Express Nodejs');
});



