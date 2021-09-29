//<------------------ServiceCard CONTROLLER-------------------->

//create a router
const { request } = require("express");
const express = require("express");
const router = express.Router();

//models
const ServiceCard = require("../models/serviceCard.model.js");


// <----------------------------------CRUD Operation for ServiceCards----------------------------------->

// post ServiceCards to the database 

router.post("/", async function (req, res) {
    try {
        const post = await ServiceCard.create(req.body);
        return res.status(201).send(post);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get all ServiceCards from database

router.get("/", async function (req, res) {
    try {
        const get = await ServiceCard.find().lean().exec();
        return res.status(200).send(get);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get ServiceCards by Id

router.get("/:id", async function (req, res) {
    try {
        const getById = await ServiceCard.findById().lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get ServiceCards by domestic Id

router.get("/query/:id", async function (req, res) {
    try {
        const getById = await ServiceCard.find({id: req.params.id}).lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// Update the ServiceCards in the database

router.patch("/:id", async function (req, res) {
    try {
        const update = await ServiceCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(update);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// delete the ServiceCards from the database

router.delete("/:id", async function(req, res) {
    try {
        const remove = await ServiceCard.findByIdAndDelete(req.params.id);
        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

//export
module.exports = router;