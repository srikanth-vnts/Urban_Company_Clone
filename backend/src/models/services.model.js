const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    category: {type:String, required:true},
    needs: [{type:String, required:true}],
    review: {type:Number, required:true},
    aboutHire: { type: String, required: true },
    aboutOffered: { type: String, required: true },
    aboutWhy: [{type:String, required:true}],
},{
    versionKey:false,
    timestamps:true
})

const services = mongoose.model("services",servicesSchema);

module.exports = services;