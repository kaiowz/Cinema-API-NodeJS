const mongoose = require("mongoose");

const database = mongoose.connect(`${process.env.DB}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Conectado ao banco de dados com sucesso!")
}).catch((e)=>{
    console.log("Houve um erro ao se conectar ao banco de dados " + e);
});

module.exports = database;