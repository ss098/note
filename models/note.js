var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_CONNECT_STRING);

var noteSchema = new Schema({
    title:  String,
    content: String,
    marodown: String,
    date: { type: Date, default: Date.now },
    password: String,
});

module.exports = mongoose.model('Note', noteSchema);