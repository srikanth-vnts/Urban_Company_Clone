
const express = require("express");
const router = express.Router();

//models
const User = require("../models/user.model");



// <----------------------------------CRUD Operation for users----------------------------------->

router.get("/", async (request, response) => {
    try {
        const results = await User.find().lean().exec();
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.get("/:id", async (request, response) => {
    try {
        const results = await User.findById(request.params.id);
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.get("/query/:email", async (request, response) => {
    try {
        const results = await User.find({ email: request.params.email }).lean().exec();
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.post("/", async (request, response) => {
    try {
        const results = await User.create(request.body);
        return response.send(results);
    }
    catch (err) {
        console.log("im here")
        response.status(401).send(err.message);
    }
});

router.patch("/:id", async (request, response) => {
    try {
        const results = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const results = await User.findByIdAndDelete(request.params.id);
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});




//export
module.exports = router;