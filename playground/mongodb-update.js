const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("unabke to connect to DB");
  }
//    console.log("good to go you are connect");

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('595b57f4a60c80259431cda9')
},{
  $set:{
    name:'shimon'
  },
  $inc:{
    age:1
  }
},{
returnOriginal:false
}).then((res)=>{
  console.log(res);
});
db.close();

  });
