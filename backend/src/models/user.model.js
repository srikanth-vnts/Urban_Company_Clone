//User model for signup

const mongoose = require("mongoose");
const { Schema } = mongoose;

//user"s schema
const userSchema = new Schema({
    phoneNumber: { type: Number, required: true },
    services: [{}]
 
}, {timestamps: true, versionKey: false});

//creating model for user
const User = mongoose.model("user", userSchema);

//export
module.exports = User;