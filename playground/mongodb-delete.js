const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    var db = client.db('TodoApp');
if(err){
    return console.log('Unanle to connect to mongodb server');
}
console.log('Connected to mongo db server');
// db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
//     console.log(result);
// });
// db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
//     console.log(result);
// });
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);
// })
// db.collection('Users').findOneAndDelete({_id:new ObjectID('5dbee3c5c1607a45588a06b6')}).then((result)=>{
//     console.log(result);
// })
db.collection('Users').deleteMany({name:'nisha'}).then((result)=>{
    console.log(result);
})
})