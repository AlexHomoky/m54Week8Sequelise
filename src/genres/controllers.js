const Genre = require("./model");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genrename: req.body.genrename,
    });
    res
      .status(201)
      .json({ message: `${genre.genrename} was added`, genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllGenres = async (req, res) => {
  try {
    const genre = await Genre.findAll({});
    res
      .status(201)
      .json({ message: "success on all the genres.", genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addGenre: addGenre,
  getAllGenres: getAllGenres,
};
