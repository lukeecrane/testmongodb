//const MmongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  //Makes reference into const variables

//var obj = new ObjectID();

//var user= { name: 'andrew', age:25};
//var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,database) => {
    if (err) {
        return console.log("UNable to connect to MongoDB"+err);
    }
    var db=database.db('TodoApp')  //A way to change databases
    console.log('Connected to MongoDB server'+db);
    if (db) {
        
        db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a3aafa7bdb2529ef667d9a4')},{ $set: { completed: true}},{returnOriginal:false}).then((result)=> {
            console.log(result);
            database.close();
        })
        
        db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a39a79edea5fa320428adb5")},{ $set: { name: "Luke is the Best"}, $inc: { age: 50}},{returnOriginal:false}).then((result)=> {
            console.log(result);
            database.close();
        })
        

        

      
    }
});