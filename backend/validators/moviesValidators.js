class MovieValidator{
    async check(movie){
        const error = [];
        
        (!movie.title) ? error.push({title: {msg: "Título inválido"}}):error;
        (!movie.poster_url) ? error.push({poster_url: {msg: "Poster inválido"}}):error;
        (!movie.duration) ? error.push({duration: {msg: "Duração inválida"}}):error;
        (!movie.director) ? error.push({director: {msg: "Diretor inválido"}}):error;
        (!movie.synopsis) ? error.push({synopsis: {msg: "Sinopse inválida"}}):error;
        (!movie.genre) ? error.push({genre: {msg: "Gênero inválido"}}):error;
        (!movie.trailer_url) ? error.push({trailer_url: {msg: "Trailer inválido"}}):error;

        return error;
    }
}

module.exports = new MovieValidator();