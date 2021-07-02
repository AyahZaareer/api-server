'use stict';
const express = require('express');
const DataManeger = require('../models/data-collectin-class');
const ClothesModel = require('../models/clothrs');


const newData = new DataManeger(ClothesModel);//we didn't interacte directly with mongooes .for example we use .creat() to invoke .save()

const route = express.Router();


route.get('/', getclothes);
route.get('/:id', getclothesById);
route.post('/', creatclothes);
route.put('/:id', updateclothes);
route.delete('/:id', deleteclothes);

async function getclothes(req, res, next) {
    try {

        const obj = await newData.read();
        console.log('get', obj);
        res.json({ obj });
        console.log(res.json({ obj }));
    } catch (err) {
        next(err);
    }
}

async function getclothesById(req, res, next) {
    try {
        const obj = await newDate.read(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}

async function creatclothes(req, res, next) {
    try {
        const clothesData = req.body;
        const obj = await newData.creat(clothesData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}


async function updateclothes(req, res, next) {
    try {
        const clothesData = req.body;
        const obj = await newData.update(req.params.id, clothesData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}

async function deleteclothes(req, res, next) {
    try {
        const obj = await newDate.delete(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}


module.exports = route;