const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    title: String,
    poster_url: String,
    duration: Number,
    director: String,
    synopsis: String,
    state: Number, //0 Soon - 1 Active
    genre: [String],
    trailer_url: String,
});

const modelName = "Movies"

if (mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
}else{
    module.exports = mongoose.model(modelName, modelSchema);
}