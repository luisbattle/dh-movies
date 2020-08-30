const movies = require("../data/movies.json").movies;

function enCartelera() {
  var listado = "";
  for (i = 0; i < movies.length; i++) {
    listado =
      listado +
      `<br><h3>${movies[i]["title"]}</h3><p>${movies[i]["overview"]}<p>`;
  }

  return `<h1>En cartelera</h1>
    </br>Total de peliculas: ${movies.length}
    </br>${listado}
    `;
}

module.exports = {
  enCartelera,
};
