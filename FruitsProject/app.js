const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/fruitsDB', {useNewUrlParser: true,useUnifiedTopology: true });
var fruitSchema=new mongoose.Schema({
     name:{
       type:String,
       required:[true,"why no name?"]
     },
     rating: {
       type:Number,
       min:1,
       max:10
     },
     review:String
});
var personSchema=new mongoose.Schema(
{
  name:String,
  age:Number
}
);
const fruit=mongoose.model('Fruit',fruitSchema);
const person=mongoose.model('Person',personSchema);
var apple=new fruit(
  {
    rating:-1,
    review:"moongoose hai bhau"
  }
);
apple.save();
var timmy=new person({
    name:"Aman yadav",
    age : 21
});
var kiwi=new fruit(
{
  name:"kiwi",
  rating:5,
  review:"hurray"
}
);
var orange=new fruit(
{
  name:"orange",
  rating:5,
  review:"hurray"
}
);
var banana=new fruit(
{
  name:"banana",
  rating:5,
  review:"hurray"
}
);
// fruit.insertMany([kiwi,orange,banana],function(err,){
//      if(err){
//        console.log("are bhai bhai bhai");
//      }else{
//        console.log("ulala ulala ");
//      }
// });

fruit.find(function(err,fruits){
  if(err){
    console.log("some error occurred ")
  }else{
    mongoose.connection.close();
   fruits.forEach(function(fr){
     console.log(fr.name);
   });
  }
});
