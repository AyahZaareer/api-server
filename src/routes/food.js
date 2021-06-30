'use stict';
const express = require('express');
const DataManeger = require('../models/data-collectin-class');
const FoodModel = require('../models/food');


const newData = new DataManeger(FoodModel);//we didn't interacte directly with mongooes .for example we use .creat() to invoke .save()

const route = express.Router();


route.get('/', getFood);
route.get('/:id', getFoodById);
route.post('/', creatFood);
route.put('/:id', updateFood);
route.delete('/:id', deleteFood);

async function getFood(res, req, next) {
    try {
        const obj = await newData.read();
        res.json(obj);
    } catch (err) {
        next(err);
    }
}

async function getFoodById(res, req, next) {
    try {
        const obj = await newDate.read(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}

async function creatFood(res, req, next) {
    try {
        const foodData = req.body;
        const obj = await newData.creat(foodData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}


async function updateFood(res, req, next) {
    try {
        const foodData = req.body;
        const obj = await newData.update(req.params.id, foodData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}

async function deleteFood(res, req, next) {
    try {
        const obj = await newDate.delete(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}


module.exports = route;

