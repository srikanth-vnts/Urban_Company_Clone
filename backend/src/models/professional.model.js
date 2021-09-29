const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
    phoneNumber: {type:Number, required:true},
    name: {type:String, required:true},
    occupation: {type:String, required:true},
    address: {type:String, required:true},
    image: {type:String, required:true},
    reviews: {type:String, required:true},
    rating: {type:Number, required:true},
},{
    versionKey:false,
    timestamps:true
})

const Professional = mongoose.model("professional",professionalSchema);

module.exports = Professional;