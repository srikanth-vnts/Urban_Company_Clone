const mongoose = require("mongoose");

const serviceProfessionalSchema = new mongoose.Schema({
    city: {type:String, required: true },
    dashboard_img:{type:String, required: true },
    category: {type:String, required: true },
    dashboard: [{type:String, required: true }],
    numOfProf: {type:Number, required: true },
    faqs: [[{type:String, required: true }]],
    aboutProf: [[{type:String}]],
    needfor:[{type:String}],
    ratingStatus:[{type:String}]
},{
    versionKey:false,
    timestamps:true
})

const services = mongoose.model("serviceProfessional",serviceProfessionalSchema);

module.exports = services;