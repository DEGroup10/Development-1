
const express = require('express');
const { requireSignin, adminMiddleware, storeMiddleware, requireStoreSignin } = require('../../common-middleware');
const { createStore, storeSignin, storeData } = require('../../controller/store/store');
const { validateSigninRequest, isRequestVaildated } = require('../../validators/auth');
const router = express.Router();




router.post('/shop/create',requireSignin,adminMiddleware,createStore)
router.post('/store/signin',validateSigninRequest,isRequestVaildated,storeSignin);
router.post('/storeData',requireStoreSignin,storeMiddleware,storeData);


module.exports = router;