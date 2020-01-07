const express    = require('express')
const bodyParser = require('body-parser')
const request    = require('request')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var baseUrl="https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var crypto=req.body.crypto;
  var fiat=req.body.fiat;
  var currentUrl=baseUrl+crypto+fiat;
  var amount=req.body.amount;
  var options={
    url:currentUrl,
    from:crypto,
    to:fiat,
    amount:amount
  };
  request(options,function(error,response,body){
      var data=JSON.parse(body);
      console.log(data);
      res.write("<p>Timestamp :  "+data.display_timestamp+ "  </p>");
      res.write("the bitcoin price : "+amount+crypto+" equal to "+data.averages.day+fiat);
      res.send();
  })

});


app.listen(port,function(){
console.log(`server started at ${port}`)
});
