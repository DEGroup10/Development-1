const express = require('express');
const { requireStoreSignin, storeMiddleware } = require('../../common-middleware');
const { createProduct } = require('../../controller/store/product');
const router = express.Router();



router.post('/product/create',requireStoreSignin,storeMiddleware,createProduct);


module.exports = router;