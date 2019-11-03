const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    var db = client.db('TodoApp');
if(err){
    return console.log('Unanle to connect to mongodb server');
}
console.log('Connected to mongo db server');
// db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5dbedcfbc1607a45588a03fd')},
// {
//     $set:{
//        completed:true 
//     }
// },{
//    returnOriginal:false 
// }).then((result)=>{
//     console.log(result);
// })  
db.collection('Users').findOneAndUpdate({_id:new ObjectID('5dbee385c1607a45588a0697')},
{
    $set:{
       name:'nisha' 
    },
    $inc:{
        age:1
     }
},{
   returnOriginal:false 
}).then((result)=>{
    console.log(result);
})  
})