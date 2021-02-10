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
        release_date:{
            notEmpty: true,
            errorMessage: "Invalid release date!"
        },
        distribuitor: {
            notEmpty: true,
            trim: true,
            errorMessage: "Invalid distribuitor!"
        },
        restriction_age:{
            notEmpty: true,
            isInt: true,
            errorMessage: "Invalid restriction age!"
        }
    }),
    edit: checkSchema({
        title:{
            optional: true,
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid title!"
        },
        poster_url:{
            optional: true,
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid poster url!"
        },
        director:{
            optional: true,
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid director!"
        },
        duration:{
            optional: true,
            trim: true,
            notEmpty: true,
            isInt: true,
            toInt: true,
            errorMessage: "Invalid duration!"
        },
        synopsis:{
            optional: true,
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid synopsis!"
        },
        state:{
            optional: true,
            trim: true,
            notEmpty: true,
            isInt: true,
            toInt: true,
            errorMessage: "Invalid state!"
        },
        genre:{
            optional: true,
            notEmpty: true,
            errorMessage: "Invalid genre!"
        },
        trailer_url:{
            optional: true,
            trim: true,
            notEmpty: true,
            errorMessage: "Invalid trailer url!"
        },
        release_date:{
            optional: true,
            notEmpty: true,
            errorMessage: "Invalid release date!"
        },
        distribuitor: {
            optional: true,
            notEmpty: true,
            trim: true,
            errorMessage: "Invalid distribuitor!"
        },
        restriction_age:{
            optional: true,
            notEmpty: true,
            isInt: true,
            errorMessage: "Invalid restriction age!"
        }
    })
}