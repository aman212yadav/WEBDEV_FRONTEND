const express   =   require("express")
const bodyParser = require("body-parser")
const request    = require("request")
const app = express();

const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));



app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
  console.log(req.body);
});

app.listen(port,function(){
   console.log(`server started at port ${port}`);
});
