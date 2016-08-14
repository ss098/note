var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// process.env.MONGO_CONNECT_STRING
mongoose.connect("mongodb://122.114.110.225/note");

var noteSchema = new Schema({
    title:  String,
    content: String,
    marodown: String,
    date: { type: Date, default: Date.now },
    password: String,
});

module.exports = mongoose.model('Note', noteSchema);