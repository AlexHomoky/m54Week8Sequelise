const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  deleteBook,
  deleteAllBooks,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
