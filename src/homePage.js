const movies = require("../data/movies.json");

function home() {
  console.log(movies["movies"]);
  movies["movies"].sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  // res.end(movies.toString);
  var listado = "";
  for (i = 0; i < movies.length; i++) {
    listado = listado + `<li>  ${movies[i]["title"]} </li>`;
  }
  console.log(listado);
  return `Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.
        <br/>Total de peliculas en cartelera: ${movies.length}
                            <br/>${listado}
                            <br/><a href="/mas-votadas">Mas votadas</a>
                            <br/><a href="/en-cartelera">En Cartelera</a>
                            <br/><a href="/sucursales">Sucursales</a>
                            <br/><a href="/contacto">Contacto</a>
                            <br/><a href="preguntas-frecuentes">Preguntas Frecuentes</a>`;
}

module.exports = {
  home,
};
