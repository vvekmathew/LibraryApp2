const express = require('express');
const app = new express();
const port = process.env.PORT || 2000;
const nav = [
    { link: "/books", name: "Books" },
    { link: "/authors", name: "Authors" },
    { link: "/admin", name: "Add Book" }
];

const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const adminRouter = require("./src/routes/adminRoutes")(nav);

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors",authorsRouter);
app.use("/admin",adminRouter);

app.get('/', (req, res) => {
    res.render("index",
        {
            nav,
            title: "Library"
        });
});


app.listen(port,()=>{console.log("Server Ready at " + port);});