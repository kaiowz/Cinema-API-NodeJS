const SessionsModel = require("../models/sessionsModel");
const MoviesModel = require("../models/moviesModel");
const {validationResult, matchedData} = require("express-validator");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = new class SessionController{
    async create(req, res){
        let json = {error:[], result:[]};
        let data = req.body;

        await MoviesModel.findById({_id:data.movie}).then(async (movie) =>{
            if (movie){
                await SessionsModel.create(req.body).then((session)=>{
                    movie.state = 1;
                    movie.save();
                    json.result.push(session);
                }).catch((err)=>{
                    json.error.push(err.message);
                });  
            }else{
                json.error.push("Invalid id");
            }
        }).catch((err)=>{
            json.error.push(err.message);
        });
        res.json(json);
    }

    async update(req, res){

    }

    async inative(req, res){

    }
}