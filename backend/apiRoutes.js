const router = require("express").Router();

const MoviesController = require("./controllers/moviesController");
const MoviesValidator = require("./validators/moviesValidators");

router.get("/api/movies", MoviesController.all);
router.get("/api/movie/:_id", MoviesController.one);
router.post("/api/movie", MoviesValidator.new, MoviesController.create);
router.post("/api/movies", MoviesController.search);

module.exports = router;