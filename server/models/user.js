var mongoose = require('mongoose');
var User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        minlength:2,
        trim:true
    },
    age:{
        type:Number
    },
    email:{
       type:String,
       required:true,
       trim:true,
       minlength:1

    }
})
module.exports = {User}