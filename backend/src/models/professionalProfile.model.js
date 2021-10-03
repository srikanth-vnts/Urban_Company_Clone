const mongoose = require("mongoose");

const professionalProfileSchema = new mongoose.Schema({
    name: {type:String, required: true },
    category: {type:String, required: true },
    profilePicLink: {type:String, required: true },
    address:{type:String, required: true },
    rating: {type:String, required: true },
    totalRating: {type:String, required: true },
    noOf5Satr: {type:String, required: true },
    commets: [[{type:String, required: true }]],
},{
    versionKey:false,
    timestamps:true
})

const services = mongoose.model("professionalProfile",professionalProfileSchema);

module.exports = services;