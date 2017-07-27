var express=require('express');
var bp=require('body-parser');

var {mongose}=require('./db/mongoose');
const {ObjectID}=require('mongodb');

var {Todo}=require('./models/Todo');
var {user} =require('./models/User');
var {album}=require('./models/albums')
var app=express();


const port = process.env.PORT || 3000 ;
app.use(bp.json());

app.post('/albums',(req,res)=>{
 var album= new album({
   name: req.body.text,
   url: req.body.text,
   img: req.body.text,
   tiny_img: req.body.text

 });

 todo.save().then((doc)=>{
   res.send(doc);
 },(e)=>{
   res.status(400).send(e);
 });
});


 app.get('/albums',(req,res)=>{
    Todo.find().then((album)=>{
      res.send({album});
  },(e)=>{
    res.status(400).send(e);
  })
  });

  app.get('/albums/:id',(req,res)=>{
    var id =req.params.id;
    if(!ObjectID.isValid(id)){
      res.status(404).send();
    }
     Todo.findById(id).then((albun)=>{
       if(!album){
        res.status(404).send();
       }
       res.send({todo});
   },(e)=>{
     res.status(400).send(e);
   })
   });

app.listen(port,()=>{
console.log(`strat on port ${port}`);

});
