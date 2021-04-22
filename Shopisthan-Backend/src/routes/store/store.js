
const express = require('express');
const { requireSignin, adminMiddleware } = require('../../common-middleware');
const { createStore, storeSignin } = require('../../controller/store/store');
const { validateSigninRequest, isRequestVaildated } = require('../../validators/auth');
const router = express.Router();




router.post('/shop/create',requireSignin,adminMiddleware,createStore)
router.post('/store/signin',validateSigninRequest,isRequestVaildated,storeSignin);


module.exports = router;