/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


//创建一个模型，就是在设计数据库模型
// MongoDB是动态的，非常灵活，只需要在代码中设计你的数据库就可以了。
// mongoose这个包可以让你的设计编写过程变得非常简单。
var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });

kitty.save(function(err){
	if(err){
		console.log(err);
	}else{
		console.log('meow');
	}
});*/


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'xiaoming' });
kitty.save().then(() => console.log('喵喵'));