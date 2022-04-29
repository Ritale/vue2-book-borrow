const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user');
const bookRouter = require('./router/book');
const borrowRouter = require('./router/borrow');
const joi = require('joi');
const config = require('./config');

const app = express();
const expressJWT = require('express-jwt');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next();
})
// app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/book\//]}))
app.use('/book', userRouter);
app.use('/books', bookRouter);
app.use('/book', expressJWT({ secret: config.jwtSecretKey }), borrowRouter);

app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err);
    // 身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.cc(err);
    next();
})


app.listen(3000, () => {
    console.log('books server running on http://localhost:3000')
})