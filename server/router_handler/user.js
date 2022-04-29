const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.reguser = (req, res) => {
    const userInfo = req.body;
    if (!userInfo.username || !userInfo.password) {
        return res.cc('用户名或密码不能为空')
    }
    const sql = 'select * from users where username=?';
    db.query(sql, userInfo.username, (err, results) => {
        if (err) return res.cc(err);
        if (results.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名');
        }
        userInfo.password = bcrypt.hashSync(userInfo.password, 10);
        const sqlStr = 'insert into users set ?';
        db.query(sqlStr, {username: userInfo.username, password: userInfo.password}, (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.send({ status: 1, message: '用户注册失败，请稍后再试'});
            res.send({status: 0, message: '注册成功。'});
        })
    })
}

exports.login = (req, res) => {
    const userInfo = req.body;
    const sql = 'select * from users where username=?';
    db.query(sql, userInfo.username, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('登录失败！')
        const compareResult = bcrypt.compareSync(userInfo.password, results[0].password);
        if (!compareResult) return res.cc('密码不正确！')
        const user = {...results[0], password: '', user_pic: ''};
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: '10h'
        });
        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer ' + tokenStr
        })
    })
}