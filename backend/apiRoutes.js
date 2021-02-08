const router = require("express").Router();

const MoviesController = require("./controllers/moviesController");


router.get("/api/movies", MoviesController.all);
router.post("/api/movie", MoviesController.create);

module.exports = router;