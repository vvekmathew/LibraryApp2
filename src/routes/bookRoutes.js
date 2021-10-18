const express = require('express');
const booksRouter = express.Router();
function router(nav) {
    var books = [
        {
            title: "Tom and Jerry",
            author: "Joseph Barbara",
            genre: "cartoon",
            img: "george_rr_martin.jpg"
        },
        {
            title: "Harry Potter",
            author: "JK Rowling",
            genre: "fantasy",
            img: "Rowling.png"
        },
        {
            title: "Pathummayude Aadu",
            author: "Basheer",
            genre: "Drama",
            img: "tolkien.jpg"
        }
    ];

    booksRouter.get('/', (req, res) => {
        res.render("books",
            {
                nav,
                title: "Library",
                books
            });
    });

    booksRouter.get('/:id', (req, res) => {
        const id = req.params.id;
        res.render('book',
            {
                nav,
                title: "Library",
                book: books[id]
            });
    });
    return booksRouter;
}


module.exports = router;