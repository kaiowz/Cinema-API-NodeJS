const {checkSchema} = require("express-validator");

module.exports = {
    new: checkSchema({
        title:{
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid title!"
        },
        poster_url:{
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid poster url!"
        },
        director:{
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid director!"
        },
        duration:{
            trim: true,
            notEmpty: true,
            isInt: true,
            toInt: true,
            errorMessage: "Invalid duration!"
        },
        synopsis:{
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid synopsis!"
        },
        state:{
            trim: true,
            notEmpty: true,
            isInt: true,
            toInt: true,
            errorMessage: "Invalid state!"
        },
        genre:{
            notEmpty: true,
            errorMessage: "Invalid genre!"
        },
        trailer_url:{
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid trailer url!"
        },
    })
}