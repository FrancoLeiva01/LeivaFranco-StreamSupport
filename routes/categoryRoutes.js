const express = require('express');
const getCategorys = require('../controllers/categorysController');
const categoryRouter = express.Router();

categoryRouter.get("/", getCategorys);

module.exports = categoryRouter;