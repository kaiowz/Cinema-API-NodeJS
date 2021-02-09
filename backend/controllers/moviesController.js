const MoviesModel = require("../models/moviesModel");
const {validationResult, matchedData} = require("express-validator");
class MoviesController{
    async all(req, res){
        let json = {error: [], result:[]};
        await MoviesModel.find().then((res)=>{
            if (res.length == 0){
                json.result.push("No movies are stored!");
                return res.json(json);
            }

            for(let i in res){
                if (res[i].state == 1){
                    json.result.push({ativo:res[i]});
                }else{
                    json.result.push({breve:res[i]});
                }
            }
        }).catch((err)=>{
            json.error.push(err.message);
        });

        res.json(json);
    }

    async one(req, res){
        let json = {error: [], result:[]};
        let {_id} = req.params;
        await MoviesModel.findOne({_id: _id}).then((res) =>{
            json.result.push(res);
        }).catch((err)=>{
            json.error.push(err.message);
        });
        res.json(json);
    }

    async search(req, res){
        let json = {error: [], result: []};
        let {search} = req.body;
        if (search){
            await MoviesModel.find({
                $or:[
                    {"director": {$regex: search, $options: "i"}},
                    {"title": {$regex: search, $options: "i"}},
                    {"distribuitor": {$regex: search, $options: "i"}},
                    {"genre": {$regex: search, $options: "i"}}
                ]
            }).then((res)=>{
                json.result.push(res);
            }).catch((err) =>{
                json.error.push(err.message);
            });
        }else{
            json.error.push("Invalid search parameter");
        }

        res.json(json);
    }

    async create(req, res){
        let json = {error: [], result:[]};
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            json.error.push(errors.mapped());
            return res.json(json);
        }
        const data = matchedData(req);
        await MoviesModel.create(data).then((res)=>{
            json.result.push(res);
        }).catch((err)=>{
            json.error.push(err.message);
        });
        res.json(json);
    }

    async update(req, res){
        let json = {error: [], result:[]};
        let {_id} = req.params;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            json.error.push(errors.mapped());
            return res.json(json);
        }
        const data = matchedData(req);

        console.log(_id);
        await MoviesModel.findByIdAndUpdate(_id, data).then((res)=>{
            json.result.push(res);
        }).catch((err)=>{
            json.error.push(err.message);
        });
        res.json(json);
    }
}

module.exports = new MoviesController();