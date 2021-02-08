const MoviesModel = require("../models/moviesModel");
const MoviesValidator = require("../validators/moviesValidators");

class MoviesController{
    async all(req, res){
        let json = {error: [], result:[]};

        let movies = await MoviesModel.find();

        if (movies.length == 0){
            json.result.push("No movies are stored!")
            return res.json(json)
        }

        for(let i in movies){
            if (movies[i].state == 1){
                json.result.push({ativo:movies[i]});
            }else{
                json.result.push({breve:movies[i]});
            }
        }
        return res.json(json);
    }

    async one(req, res){

    }

    async create(req, res){
        let json = {error: [], result:[]};

        json.error = await MoviesValidator.check(req.body);
        
        if (json.error.length > 0) {return res.json(json);}
        let movie = await MoviesModel.create(req.body);
        json.result.push(movie);
        res.json(json);
    }
}

module.exports = new MoviesController();