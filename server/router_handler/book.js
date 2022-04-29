const db = require('../db');

// 获取图书列表
exports.getBooks = (req, res) => {
    const sql = 'select * from books';
    db.query(sql, [], (err, results) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            message: '获取图书列表成功',
            data: results
        })
    })
}

// 获取图书详情
exports.getBookDetail = (req, res) => {
    const params = req.params;
    const sql = 'select * from books where id = ?'
    db.query(sql, [params.id], (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('获取图书详情失败！')
        res.send({
            status: 0,
            data: results[0]
        })

    })
}