const {MongoClient ,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
var db = client.db('TodoApp');
if(err){
    return console.log('unable to connect to MongoDB server');
}
console.log('Connected to mongoDB server');
// db.collection('Todos',).find().count().then((count)=>{
//     console.log(`Todos count:${count}`);
// },(err)=>{
// console.log('Unable to fetch videos',err);
// })
db.collection('Users').find({name:'nisha'}).toArray().then((data)=>{
console.log(data);
},(err)=>{console.log('Unable to fetch',err)});
//db.close();
});