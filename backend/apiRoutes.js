const router = require("express").Router();

//ROTAS DE FILMES
const MoviesController = require("./controllers/moviesController");
const MoviesValidator = require("./validators/moviesValidator");

router.get("/api/movies", MoviesController.all);
router.get("/api/movie/:_id", MoviesController.one);
router.post("/api/movie", MoviesValidator.newAndEdit, MoviesController.create);
router.post("/api/movies", MoviesController.search);
router.put("/api/movie/:_id", MoviesValidator.newAndEdit, MoviesController.update);
router.delete("/api/movie/:_id", MoviesController.delete);

//ROTAS DE SESSÕES
const SessionController = require("./controllers/sessionsController");

router.get("/api/sessions", SessionController.all);
router.get("/api/session/:_id", SessionController.one);
router.post("/api/session", SessionController.create);
router.put("/api/session/:_id", SessionController.update);


module.exports = router;