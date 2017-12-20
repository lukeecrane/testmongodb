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
        db.collection('Todos').insertOne({
            name: 'Luke'
        },(err, results) => {
            if (err) {
                return console.log("Unable to insert Todo"+err);
            }
            console.log(JSON.stringify(results.ops,undefined,2))
        })

        db.collection('Users').insertOne({
            name: "Luke Crane",
            age: 25,
            location:" Here"
        }, (err, results) => {
            if (err) {
                return console.log("Unable to insert Users"+err);
            }
            console.log(JSON.stringify(results.ops,undefined,2));
            console.log(results.ops[0]._id.getTimestamp())
        });

        

        database.close();
    }
});