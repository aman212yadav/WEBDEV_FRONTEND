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
  var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  var email=req.body.email;
 var data={
     members:[
       { email_address:email,
         status:"subscribed",
         merge_fields:{
           FNAME:firstname,
           LNAME:lastname
         }
       }
     ]
 }
 var jsonData=JSON.stringify(data);
  var options={
       url:"https://us4.api.mailchimp.com/3.0/lists/e804e73fc2",
       method:"POST",
       headers:{
         "Authorization":"aman 39210fa2578a1703d3f267f9d65ab1ac-us4"
       },
       body:jsonData
  }
  request(options,function(error,response,body){
         if(error){
           res.sendFile(__dirname+"/failure.html");
         }else{
           if(response.statusCode==200)
           res.sendFile(__dirname+"/success.html");
           else
           res.sendFile(__dirname+"/failure.html");
         }
  })
});

app.listen(process.env.PORT||port,function(){
   console.log(`server started at port ${port}`);
});

// API KEY
// 39210fa2578a1703d3f267f9d65ab1ac-us4

// LIST ID
// e804e73fc2
