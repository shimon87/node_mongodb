var mongoose =require('mongoose');

var albums = mongoose.model('albums',{
    title:{
      type:String,
      required: true,
      trim: true,
      minlength:1
    },
    artist:{
      type:String,
      required: true,
      trim: true,
      minlength:1
    },
    url:{
        type:String,
        required: true,
        trim: true,
        minlength: 1

    },
    img:{
        type:String,
        required: true,
        trim: true,
        minlength: 1

    },
    tiny_img:{
        type:String,
        required: true,
        trim: true,
        minlength: 1

    }
});


module.exports ={
albums
};
