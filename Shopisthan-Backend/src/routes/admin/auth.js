const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const router = express.Router();
const Admin = require('../../models/admin/auth');
const { validateSigninRequest, isRequestVaildated, validateSignupRequest } = require('../../validators/auth');


router.post('/admin/signin',validateSigninRequest,isRequestVaildated,signin);
router.post('/admin/signup',validateSignupRequest,isRequestVaildated,signup);

module.exports = router;