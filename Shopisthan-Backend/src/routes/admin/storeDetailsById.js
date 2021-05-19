const express = require("express");
const {  adminMiddleware, requireAdminSignin } = require("../../common-middleware");
const { getStoreDetailsById } = require("../../controller/admin/storeDetailsById");
const router = express.Router();

router.get(`/store/:storeId`,requireAdminSignin,adminMiddleware,getStoreDetailsById)

module.exports = router;