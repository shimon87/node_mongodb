const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log("unabke to connect to DB");
  }
    console.log("good to go you are connect");

  db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
      console.log('---Todos---');
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('unable to get items',err);
    });
db.close();

  });
