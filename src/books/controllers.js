const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      GenreId: req.body.GenreId,
    });
    res.status(201).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const book = await Book.findAll({});
    res.status(201).json({ message: "success on all the books.", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findAll({
      where: { author: req.body.author },
    });
    res.status(201).json({ message: "books by author", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.update(
      { title: req.body.newtitle },
      {
        where: { title: req.body.title },
      }
    );
    res.status(201).json({ message: "book title updated", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.destroy({
      where: { title: req.body.title },
    });
    res.status(201).json({ message: "book deleted", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const deleteAllBooks = async (req, res) => {
  try {
    const book = await Book.destroy({
      truncate: true,
    });
    res.status(201).json({ message: "All books deleted.", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  deleteBook: deleteBook,
  deleteAllBooks: deleteAllBooks,
  getBook: getBook,
  updateBook: updateBook,
};
