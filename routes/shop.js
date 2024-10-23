const path = require('path');

const express = require('express');

const controllerproduct=require('../controllers/products');

const router = express.Router();

router.get('/',controllerproduct.getproducts );

module.exports = router;
