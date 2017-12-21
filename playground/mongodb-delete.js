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
        
    //delete Many
    db.collection('Todos').deleteMany({ text: 'Eat lunch'}).then( (result)=> {
        console.log(result.result)
    })

    //deleteOne
    db.collection('Todos').deleteOne({ text: 'Eat lunch'}).then( (result)=> {
        console.log(result.result)
    }) 

    // findOneAndDelete  
    db.collection('Todos').findOneAndDelete({ text: 'Eat Lunch'}).then( (result)=> {
        console.log(result)
        console.log(result.value)
        db.collection('Todos').insertOne(result.value).then((result,err) => {
            console.log(result)
            database.close();
        })
    })     
        
        

        

      
    }
});