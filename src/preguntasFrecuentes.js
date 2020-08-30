const faqs = require("../data/faqs.json").faqs;

function preguntasFrecuentes() {
  var listado = "";
  for (i = 0; i < faqs.length; i++) {
    listado =
      listado +
      `<li>${faqs[i]["faq_title"]}</li>
            <b>${faqs[i]["faq_answer"]}</b>
            </br> <p> </p>              `; // para dejar un espaciado, meti un <p> vacío
  }
  return `<h1>Preguntas Frecuentes</h1>
        </br> Total de preguntas: ${faqs.length}
        </br>
        </br><h3>Listado de preguntas:</h3> ${listado}
        `;
}

module.exports = {
  preguntasFrecuentes,
};
