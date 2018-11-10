var fs = require('fs');

function pReadFile(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path, 'utf8', function(error,data){
			if(error){
				reject(error);
			}else{
				resolve(data);
			}
		});
	});
}


pReadFile('./a.txt')
	.then(function(data){
		console.log(data);
		return pReadFile('./b.txt')
	},function(err){
		console.log(err);
	})
	.then(function(data) {
		console.log(data);
		return pReadFile('./c.txt');
	},function(err){
		console.log(err);		
	})
	.then(function(data){
		console.log(data);
	},function(err){
		console.log(err );
	});