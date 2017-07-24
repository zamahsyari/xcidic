const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
    	type: String,
    	required:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: String,
        required:true
    },
    name:{
        type: String
    },
    mrCode:{
        type: String,
        required:true
    },
    {
    timestamps : true
});

module.exports = mongoose.model('Users', RecordSchema);