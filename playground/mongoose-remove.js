const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// Todo.remove({}).then((result)=>{
// console.log(result);
// });
// Todo.findOneAndRemove({_id:'5dc02a589478727dc0a2c687'}).then((todo)=>{
//     console.log(todo);
//     });
Todo.findByIdAndRemove('5dc0280e9478727dc0a2c41a').then((todo)=>{
console.log(todo);
});