const express = require('express');
const borrowHandler = require('../router_handler/borrow');

const router = express.Router();
router.post('/borrow/:id', borrowHandler.borrowBook);
router.post('/return/:id', borrowHandler.returnBook);

module.exports = router;