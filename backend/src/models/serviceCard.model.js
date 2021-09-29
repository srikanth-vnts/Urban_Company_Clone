const mongoose = require("mongoose");

const serviceCardSchema = new mongoose.Schema({
    category: {type:String, required:true},
    image: {type:String, required:true},
    review: {type:Number, required:true},
    price: {type:String, required:true},
    disclaimers: { type: String, required: true }
},{
    versionKey:false,
    timestamps:true
})

const serviceCard = mongoose.model("serviceCard",serviceCardSchema);

module.exports = serviceCard;