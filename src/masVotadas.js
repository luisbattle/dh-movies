const movies = require("../data/movies.json").movies;

function masVotadas() {
  let promedio = 0;
  var listado = "";
  var total = 0;
  let rating = 0;
  for (i = 0; i < movies.length; i++) {
    if (movies[i]["vote_average"] >= 7) {
      total = total + 1;
      rating = rating + movies[i]["vote_average"];
      listado =
        listado +
        `</br><h2>${movies[i]["title"]}</h2> <li><b>Rating: </b> ${movies[i]["vote_average"]}</li> <li><b>Reseña: </b>${movies[i]["overview"]}</li>`;
    }
    console.log(`Rating: ${rating}`);
    console.log(`Total: ${total}`);

    promedio = rating / total;
    console.log(`Promedio: ${promedio}`);
  }
  return `<h1>Más Votadas</h1> 
        </br> Total de peliculas: <li>${total}</li>
        </br> Rating promedio: ${promedio}
        </br>
        </br> Listado de peliculas: 
        </br> ${listado}
        `;
}

module.exports = {
  masVotadas,
};
