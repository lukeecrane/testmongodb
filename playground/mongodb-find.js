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
        
        //{ "field": { $gt: value1, $lt: value2}}  gt= greater than lt = less than 
        db.collection('Todos').find({completed: false}).toArray().then((docs) => {
            console.log('Todos')
            console.log(JSON.stringify(docs,undefined,2))
        }, (err) => {
            console.log('Unable to fetch todos',err)
        })

        db.collection('Todos').find({completed: true}).count().then((count) => {
            console.log('Todos count:' +count)
        }, (err) => {
            console.log('Unable to fetch todos',err)
        })
        
        
        
        

        

        database.close();
    }
});