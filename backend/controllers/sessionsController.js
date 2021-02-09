const SessionsModel = require("../models/sessionsModel");
const MoviesModel = require("../models/moviesModel");
const {validationResult, matchedData} = require("express-validator");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = new class SessionController{    
    async all(req, res){
        let json = {error:[], result:[]};
        await SessionsModel.find().populate('movie').then((sessions)=>{
            json.result.push(sessions);
        }).catch((err)=>{
            json.error.push(err.message);
        });
        res.json(json);
    }

    async one(req, res){
        let json = {error:[], result:[]};
        let {_id} = req.params;
        await SessionsModel.findOne({_id: _id}).populate('movie').then((sessions)=>{
            json.result.push(sessions);
        }).catch((err)=>{
            json.error.push(err.message);
        });
        res.json(json);
    }

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
        let json = {error:[], result:[]};
        let {_id} = req.params;
        let data = req.body;
        await SessionsModel.findById({_id: _id}).then(async (session) =>{
            await MoviesModel.findById({_id: session.movie}).then((movie)=>{
                movie.state = 0;
                movie.save();
            }).catch((err)=>{
                json.error.push(err.message);
            });

            await MoviesModel.findById({_id: data.movie}).then((movie)=>{
                movie.state = 1;
                movie.save();

                session.movie = data.movie;
                session.session_date = data.session_date;
                session.save();
                json.result.push(session);
            }).catch((err)=>{
                json.error.push(err.message);
            });
            
        }).catch((err)=>{
            json.error.push(err.message);
        });

        res.json(json);
    }

    async inative(req, res){

    }
}