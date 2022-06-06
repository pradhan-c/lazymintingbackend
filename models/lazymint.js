const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
 tokenId: {
  type: Number,
  required: true,
 },
 minPrice: {
  type: Number,
  required: true,
 },
 uri: {
  type: String,
  required: true,
 },
 signature: {
  type: String,
  required: true,
 },
 image:{
  type: String,
  required : true
 },
 name:{
    type: String,
    required : true
 },
 description:{
    type: String,
    required : true
 },
 price: {
   type: Number,
   required: true,
},
listed: {
   type:Boolean,
   required: true,
},
account: {
   type:String,
   required:true,
}

 

});

const lazymint = mongoose.model("lazymint", nftSchema);
module.exports =  lazymint ;