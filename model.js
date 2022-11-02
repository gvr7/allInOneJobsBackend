const mongoose = require("mongoose")
const Schema = mongoose.Schema({
  imageUrl : {type:String,required:true},
  branches : {type : String,required:true},
  title: {type : String,required:true},
  category: {type : String},
  description : [{
  responsibilities : {type:[]} }],
  link : {type : String,required:true},
  lastDate : {type : String,required:true},
  experience :{type:String,required:true},
  company : {type:String,required:true}
})

module.exports = mongoose.model("job",Schema)