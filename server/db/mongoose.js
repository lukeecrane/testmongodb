var mongoose = require('mongoose');
mongoose.Promise= global.Promise;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/TodoApp', { useMongoClient: true });
mongoose.Promise = global.Promise

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log("**********MONGOOSE*****************")
module.exports = {
    mongoose,
    db
};