const homeSection = require("./homePage");
const masVotadasSection = require("./masVotadas");
const enCarteleraSection = require("./enCartelera");
const contactoSection = require("./contacto");
const preguntasFrecuentesSection = require("./preguntasFrecuentes");
const sucursalesSection = require("./sucursales");

function getHome() {
  return homeSection.home();
}

function getMasVotadas() {
  return masVotadasSection.masVotadas();
}

function getEnCartelera() {
  return enCarteleraSection.enCartelera();
}

function getContacto() {
  return contactoSection.contacto();
}

function getPreguntasFrecuentes() {
  return preguntasFrecuentesSection.preguntasFrecuentes();
}

function getSucursales() {
  return sucursalesSection.sucursales();
}

module.exports = {
  getHome,
  getMasVotadas,
  getEnCartelera,
  getContacto,
  getPreguntasFrecuentes,
  getSucursales,
};
