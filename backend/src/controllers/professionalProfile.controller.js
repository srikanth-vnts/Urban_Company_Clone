//<------------------Services CONTROLLER-------------------->

//create a router
const { request } = require("express");
const express = require("express");
const router = express.Router();

//models
const Services = require("../models/professionalProfile.model.js");


// <----------------------------------CRUD Operation for Servicess----------------------------------->

// post Servicess to the database 

router.post("/", async function (req, res) {
    try {
        const post = await Services.create(req.body);
        return res.status(201).send(post);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get all Servicess from database

router.get("/", async function (req, res) {
    try {
        const get = await Services.find(req.query).lean().exec();
        return res.status(200).send(get);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get Servicess by Id

router.get("/:id", async function (req, res) {
    try {
        const getById = await Services.findById({id: req.params.id}).lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})


// get Servicess by domestic Id

router.get("/query/:id", async function (req, res) {
    try {
        const getById = await Services.find({id: req.params.id}).lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// Update the Servicess in the database


router.patch("/:id", async function (req, res) {
    try {
        const update = await Services.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(update);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// delete the Servicess from the database

router.delete("/:id", async function(req, res) {
    try {
        const remove = await Services.findByIdAndDelete(req.params.id);
        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

//export
module.exports = router;