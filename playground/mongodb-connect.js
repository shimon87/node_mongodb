const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
 return console.log("unabke to connect to DB");
};

console.log("good to go you are connect");

// db.collection('Todos').insertOne({
//   text:'something to do',
//   completed:false
// },(err,result)=>{
// if(err){
//    return console.log('unable to create collect');
// }
db.collection('Users').insertOne({
  name:'shimon',
  age:30,
  location : 'israel'
},(err,result)=>{
if(err){
   return console.log('unable to insert collection');
}

console.log(result.ops[0]._id.getTimestamp());
});
db.close();

});
