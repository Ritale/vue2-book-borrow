const db = require('../db');

exports.borrowBook = (req, res) => {
    const param = req.params;
    const sql = 'select * from books where id = ?';
    db.query(sql, param.id, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('图书不存在！');
        const bookInfo = results[0];
        if (bookInfo.total <= bookInfo.borrowed_no) return res.cc('图书已全部被借出');
        bookInfo.borrowed_no += 1;
        // todo 修改借阅者信息
        const borrower = bookInfo.borrower;
        // console.log(typeof (JSON.parse(borrower)))
        const sqlStr = 'update books set ? where id = ?';
        db.query(sqlStr, [bookInfo, param.id], (error, result) => {
            if (error) return res.cc(error);
            if (result.affectedRows !== 1) return res.cc('借书失败！')
            res.send('借书成功～')
        })
    })
}

exports.returnBook = (req, res) => {
    const param = req.params;
    const sql = 'select * from books where id = ?';
    db.query(sql, param.id, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('图书不存在！');
        const bookInfo = results[0];
        if (bookInfo.borrowed_no === 0) return res.cc('无可还的图书');
        bookInfo.borrowed_no -= 1;
        const sqlStr = 'update books set ? where id = ?';
        db.query(sqlStr, [bookInfo, param.id], (error, result) => {
            if (error) return res.cc(error);
            if (result.affectedRows !== 1) return res.cc('还书失败！');
            res.send('还书成功！')
        })
    })
}
