var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
name: {type:String, required:true, trim:true},
createdAt: {type: Date},
value: {type:Number, required:true, trim:true},
income:{type:Boolean, required:true, trim:true},
img:{type:String, required:true, trim:true},
details:{type:String}
});

var Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
