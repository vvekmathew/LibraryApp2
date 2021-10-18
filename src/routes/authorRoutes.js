const express = require('express');
const authorsRouter = express.Router();
function router(nav) {
    var books = [
        {
            title: "A Song of Ice and Fire",
            author: "George RR Martin",
            genre: "epic fantasy",
            img: "george_rr_martin.jpg",
            about:"George Raymond Richard Martin (born George Raymond Martin; September 20, 1948), also known as GRRM, is an American novelist and short story writer, screenwriter, and television producer. He is the author of the series of epic fantasy novels A Song of Ice and Fire, which was adapted into the Emmy Award-winning HBO series Game of Thrones (2011–2019). In 2005, Lev Grossman of Time called Martin the American Tolkien, and in 2011, he was included on the annual Time 100 list of the most influential people in the world."
        },
        {
            title: "Harry Potter",
            author: "JK Rowling",
            genre: "fantasy",
            img: "Rowling.png",
            about:"Joanne Rowling (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith."
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R Tolkien",
            genre: "Fantasy",
            img: "tolkien.jpg",
            about:"John Ronald Reuel Tolkien CBE FRSL (3 January 1892 – 2 September 1973) was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings. He served as the Rawlinson and Bosworth Professor of Anglo-Saxon and Fellow of Pembroke College, Oxford from 1925 to 1945 and the Merton Professor of English Language and Literature and Fellow of Merton College, Oxford from 1945 to 1959. He was a close friend of C. S. Lewis, a co-member of the informal literary discussion group The Inklings. Tolkien was appointed a Commander of the Order of the British Empire by Queen Elizabeth II on 28 March 1972."
        }
    ];

    authorsRouter.get('/', (req, res) => {
        res.render("authors",
            {
                nav,
                title: "Library",
                books
            });
    });

    authorsRouter.get('/:id', (req, res) => {
        const id = req.params.id;
        res.render('author',
            {
                nav,
                title: "Library",
                book: books[id]
            });
    });
    return authorsRouter;
}


module.exports = router;