const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const RecordSchema = new Schema({
    mrCode:{
    	type: String,
    	required:true
    },
    sistole:{
    	type: Double
    },
    diastole:{
    	type: Double
    },
    weight:{
    	type: Double
    },
    height:{
    	type: Double
    },
    bloodType:{
    	type: String,
    	required:true
    },
    bloodPressure:{
    	type: Double
    },{
    timestamps : true
});

module.exports = mongoose.model('Records', RecordSchema);