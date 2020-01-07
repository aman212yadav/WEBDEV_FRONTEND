const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res) {
      res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
      let num1=Number(req.body.firstnumber);
      let num2=Number(req.body.secondnumber);
      let result=num1+num2;
      res.send("The result of addition is "+result);
});

app.get("/bmicalculator",function(req,res) {
      res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
      let weight=Number(req.body.weight);
      let height=Number(req.body.height);
      let bmi=weight/(height*height);
      res.send("You BMI : "+bmi);
});
app.listen(port,() => console.log(`server started at port ${port}`));
