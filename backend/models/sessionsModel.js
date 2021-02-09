const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    movie: mongoose.Schema.Types.ObjectId,
    session_date: Date
});

const modelName = "Sessions"

if (mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
}else{
    module.exports = mongoose.model(modelName, modelSchema);
}