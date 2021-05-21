
const express = require('express');
const { adminMiddleware, storeMiddleware, requireStoreSignin, requireAdminSignin } = require('../../common-middleware');
const { storeOrders } = require('../../controller/store/order.store');
const { createStore, storeSignin, storeData } = require('../../controller/store/store');
const { validateSigninRequest, isRequestVaildated } = require('../../validators/auth');
const router = express.Router();




router.post('/shop/create',requireAdminSignin,adminMiddleware,createStore)
router.post('/store/signin',validateSigninRequest,isRequestVaildated,storeSignin);
router.post('/storeData',requireStoreSignin,storeMiddleware,storeData);
// router.post('/store/orders',requireStoreSignin,storeMiddleware,storeOrders)


module.exports = router;