const express = require('express');
const userHandler = require('../router_handler/user');
const expressJoi = require('@escook/express-joi');
const { reg_login_schema } = require('../schema/user');

const router = express.Router();

// 注册
// 局部中间件，对注册请求提交的数据进行验证
router.post('/reguser', expressJoi(reg_login_schema), userHandler.reguser);
// 登录
router.post('/login', expressJoi(reg_login_schema), userHandler.login);


module.exports = router;