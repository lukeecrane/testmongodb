const {ObjectId} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose.js')
const {Todo} = require('./../server/models/todo.js')

var id = '5a3c93ce3c04f432f0da70df1';

if (!ObjectId.isValid(id)) {
    console.log('ID not valid');
}


Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos',todos)
}).catch((e) => console.log('Error'));

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo',todo)
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log("Id not found");
    }
    console.log('Todo By Id',todo)
}).catch((e) => console.log('Error'));
