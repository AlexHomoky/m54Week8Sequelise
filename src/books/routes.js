const { Router } = require("express");
const bookRouter = Router();
const Book = require("./model");

const {
  addBook,
  getAllBooks,
  getBook,
  deleteBook,
  deleteAllBooks,
  updateBook,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getAllBooks", async (req, res) => {
  const books = await Book.findAll({ include: "Genre" });
  res.send(books);
});

bookRouter.get("/books/getBook", getBook);

bookRouter.put("/books/updateBook", updateBook);

bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
