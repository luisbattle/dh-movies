const { home } = require("./src/index");

function getRoute(ruta) {
  switch (ruta) {
    case "/":
      return home();
    default:
      return "404 Page not found";
  }
}

module.exports = {
  getRoute,
};
