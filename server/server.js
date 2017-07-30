var express=require('express');
var bp=require('body-parser');

var {mongose}=require('./db/mongoose');
const {ObjectID}=require('mongodb');
var {albums}=require('./models/albums');
var app=express();


const port = process.env.PORT || 3000 ;
app.use(bp.json());

app.post('/albums',(req,res)=>{
 var album= new albums({
   name: req.body.name,
   url: req.body.url,
   img: req.body.img,
   tiny_img: req.body.tiny_img

 });

 album.save().then((doc)=>{
   res.send(doc);
 },(e)=>{
   res.status(400).send(e);
 });
});


 app.get('/albums',(req,res)=>{
    albums.find().then((album)=>{
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
     albums.findById(id).then((albun)=>{
       if(!album){
        res.status(404).send();
       }
       res.send({album});
   },(e)=>{
     res.status(400).send(e);
   })
   });

app.listen(port,()=>{
console.log(`strat on port ${port}`);

});
