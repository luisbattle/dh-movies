const {
  getHome,
  getMasVotadas,
  getEnCartelera,
  getContacto,
  getPreguntasFrecuentes,
  getSucursales,
} = require("./src/index");
const preguntasFrecuentes = require("./src/preguntasFrecuentes");

function getRoute(ruta) {
  switch (ruta) {
    case "/":
      return getHome();

    case "/contacto":
      return getContacto();

    case "/en-cartelera":
      return getEnCartelera();

    case "/mas-votadas":
      return getMasVotadas();

    case "/sucursales":
      return getSucursales();

    case "/preguntas-frecuentes":
      return getPreguntasFrecuentes();

    default:
      return "404 Page not found";
  }
}

module.exports = {
  getRoute,
};
