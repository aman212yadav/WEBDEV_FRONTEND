const express=require('express');
const bodyParser=require('body-parser');
var listItems=new Array();
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
  var today=new Date();
  var options={
     day:"numeric",
     weekday:"long",
     month:"long"
  }
  var current=today.toLocaleDateString("en-US",options);
  res.render('list',{din:current,items:listItems});
});

app.post("/",function(req,res) {
       listItems.push(req.body.item);
       res.redirect("/");
});

app.listen(3000,function(){
  console.log("server listening at 3000");
});
