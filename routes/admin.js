const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const router = express.Router();


const controllerproduct=require('../controllers/products');
// /admin/add-product => GET
router.get('/add-product',controllerproduct.getaddproducts );

// /admin/add-product => POST
router.post('/add-product',controllerproduct.postaddproducts );

module.exports = router;

