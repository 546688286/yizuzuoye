var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
//var cors = require("cors");
console.log(123)
var app=express();
app.use('/suibian',express.static('src'));
app.use('/keyi',express.static('views'));
//app.use(cors());
app.set('view engine','ejs');
app.post('/create',bodyParser.urlencoded({extended:false}),function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	var data=JSON.parse(data);
	data.push(req.body);
	fs.writeFileSync('meg.txt',JSON.stringify(data));
	res.render('create.ejs',{data:data})
});

//app.delete('/data/:item',function(req,res){
//  data = data.filter(function(todo) {
//  	console.log(req.params.item)
//      return todo.name !== req.params.item;
//  });
//  res.json(todos);
//})






app.get('/',function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	data=JSON.parse(data);
	res.render('create.ejs',{data:data});
	
})
app.get('/Home',function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	data=JSON.parse(data);
	res.render('Home.ejs',{data:data});
})
app.get('/about',function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	data=JSON.parse(data);
	res.render('about.ejs',{data:data});
})
app.get('/mumber',function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	data=JSON.parse(data);
	res.render('mumber.ejs',{data:data});
})
app.get('/mumbers',function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	data=JSON.parse(data);
	res.render('members.ejs',{data:data});
})
app.get('/mumberstwo',function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	data=JSON.parse(data);
	res.render('membertwo.ejs',{data:data});
})
app.get('/mumbersthree',function(req,res){
	var data=fs.readFileSync('meg.txt','utf-8');
	data=JSON.parse(data);
	res.render('memberthree.ejs',{data:data});
})

app.listen(8081)

