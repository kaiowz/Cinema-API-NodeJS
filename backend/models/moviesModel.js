const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    title: String,
    poster_url: String,
    duration: Number,
    distribuitor: String,
    release_date: Date,
    director: String,
    synopsis: String,
    state: Number, //0 Soon - 1 Active
    genre: [String],
    trailer_url: String,
    restriction_age: Number,
});

const modelName = "Movies"

if (mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
}else{
    module.exports = mongoose.model(modelName, modelSchema);
}