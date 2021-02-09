const MoviesModel = require("../models/moviesModel");
const {validationResult, matchedData} = require("express-validator");
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            json.error.push(errors.mapped());
            return res.json(json);
        }
        const data = matchedData(req);
        console.log(data);
        let movie = await MoviesModel.create(data);
        json.result.push(movie);
        res.json(json);
    }
}

module.exports = new MoviesController();