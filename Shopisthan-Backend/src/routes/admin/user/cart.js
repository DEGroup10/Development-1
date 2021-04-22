const express = require("express");
const router = express.Router();
const { addItemToCart } = require("../../../controller/user/cart");
const { requireSignin, userMiddleware } = require("../../../common-middleware");

router.post("/user/cart/addtocart", requireSignin, userMiddleware , addItemToCart);

module.exports = router;
    