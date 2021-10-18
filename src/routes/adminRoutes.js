const express = require('express');
const adminRouter = express.Router();

function router(nav) {
    adminRouter.get("/", function (req, res) {
        res.render('addBook.ejs', {
            nav,
            title: "Library"
        });
    });

    adminRouter.get("/add", function (req, res) {
        res.render('addBook.ejs', {
            nav,
            title: "Library"
        });
    });



    return adminRouter;
}

module.exports = router;