var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IncomeSchema = new Schema({
name: {type:String, required:true, trim:true},
income:{type:Boolean, required:true, trim:true},
img:{type:String, required:true, trim: true}
});

var Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;
