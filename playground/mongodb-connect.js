// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var user = {name:'andrew',age:25};
// var {name} = user;4
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    var db = client.db('TodoApp');
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');
    
    // db.collection('Todos').insertOne(
    //     {text:'something to do',
    // completed:false
    //  },(err,result)=>{
    //      if(err){
    //          return console.log('unable to insert todo',err);
    //      }
    //    console.log(JSON.stringify(result.ops,undefined,2)); 
    //  }
    // );
    db.collection('Users').insertOne(
        {
            name:'neetu',
            age:25,
            location:'jaipur'

        },function(err,result){
        if(err){
            return console.log('unable to insert todo',err);
        }
        //console.log(result.ops[0]._id.getTimestamp());
        }
    )

    client.close();
});