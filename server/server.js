var express=require('express');
var bp=require('body-parser');

var {mongose}=require('./db/mongoose');
const {ObjectID}=require('mongodb');

var {Todo}=require('./models/Todo');
var {user} =require('./models/User');

var app=express();

app.use(bp.json());

app.post('/todos',(req,res)=>{
 var todo= new Todo({
   text: req.body.text
 });

 todo.save().then((doc)=>{
   res.send(doc);
 },(e)=>{
   res.status(400).send(e);
 });
});


 app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
      res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  })
  });

  app.get('/todos/:id',(req,res)=>{
    var id =req.params.id;
    if(!ObjectID.isValid(id)){
      res.status(404).send();
    }
     Todo.findById(id).then((todo)=>{
       if(!todo){
        res.status(404).send();
       }
       res.send({todo});
   },(e)=>{
     res.status(400).send(e);
   })
   });




app.listen(3000,()=>{
console.log("strat on port 3000");

});
