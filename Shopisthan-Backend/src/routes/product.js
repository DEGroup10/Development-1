const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const shortid = require('shortid');
const { requireStoreSignin, storeMiddleware } = require('../common-middleware');
const { createProduct } = require('../controller/store/product');


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(path.dirname(__dirname),"upload"))
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname)
    }
})

var upload = multer({storage})

router.post('/product/create',requireStoreSignin,storeMiddleware,upload.array('productPictures'),createProduct);


module.exports = router;