//<------------------Professional CONTROLLER-------------------->

//create a router
const { request } = require("express");
const express = require("express");
const router = express.Router();

//models
const Professional = require("../models/professional.model.js");


// <----------------------------------CRUD Operation for Professionals----------------------------------->

// post Professionals to the database 

router.post("/", async function (req, res) {
    try {
        const post = await Professional.create(req.body);
        return res.status(201).send(post);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get all Professionals from database

router.get("/", async function (req, res) {
    try {
        const get = await Professional.find().lean().exec();
        return res.status(200).send(get);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get Professionals by Id

router.get("/:id", async function (req, res) {
    try {
        const getById = await Professional.findById().lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get Professionals by domestic Id

router.get("/query/:id", async function (req, res) {
    try {
        const getById = await Professional.find({id: req.params.id}).lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// Update the Professionals in the database

router.patch("/:id", async function (req, res) {
    try {
        const update = await Professional.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(update);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// delete the Professionals from the database

router.delete("/:id", async function(req, res) {
    try {
        const remove = await Professional.findByIdAndDelete(req.params.id);
        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

//export
module.exports = router;