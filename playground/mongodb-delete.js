const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("unabke to connect to DB");
  }
    console.log("good to go you are connect");
//deleteMany
    db.collection('Users').deleteMany({name :'shimon'}).then((res)=>{
console.log(res);
});

// deleteOne
// db.collection('Todos').deleteOne({text :'drink water'}).then((res)=>{
//   console.log(res);
// });


//find ine and deleteOn

// db.collection('Todos').findOneAndDelete({text:"drink water"}).then((res)=>{
//     console.log(res);
// });


db.close();

  });
