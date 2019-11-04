const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5dbfb4d89478727dc0a29322';
// var id = '5dbfa9c92fa0eb14a0ae33ac45';
// if(!ObjectID.isValid(ObjectID)){
//    console.log('ID not valid'); 
// }
// Todo.find({_id:id}).then((todos)=>{
//   console.log('Todos',todos);  
// });

// Todo.findOne({_id:id}).then((todo)=>{
//     console.log('todo',todo);
// })
// Todo.findById(id).then((todo)=>{
//     if(!todo){
//        return console.log('ID not found') ;
//     }
//     console.log('Todo by Id',todo);
// }).catch((e)=>{console.log(e)});
User.findById(id).then((user)=>{
    if(!user){
        console.log('unable to find user');
    }
    console.log(user);
},(e)=>{console.log('error',e)});