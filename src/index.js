const enCartelera = require("./enCartelera");
const contacto = require("./contacto");
const homePage = require("./homePage");
const masVotadas = require("./masVotadas");
const preguntasFrecuentes = require("./preguntasFrecuentes");
const sucursales = require("./sucursales");

function home() {
  return homePage.home();
}

module.exports = { home };
