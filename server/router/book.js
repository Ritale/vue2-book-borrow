const express = require('express');
const bookHandler = require('../router_handler/book');

const router = express.Router();

router.get('/books', bookHandler.getBooks);
router.get('/detail/:id', bookHandler.getBookDetail);


module.exports = router;