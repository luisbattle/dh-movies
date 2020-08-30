const theaters = require("../data/theater.json").theaters;
function sucursales() {
  var total_rooms = 0;
  var listado = "";
  for (i = 0; i < theaters.length; i++) {
    total_rooms = total_rooms + theaters[i]["total_rooms"];
    listado =
      listado +
      `</br><h2>${theaters[i]["name"]}(${theaters[i]["total_rooms"]} rooms)</h2> <li><b>Direccion: </b> ${theaters[i]["address"]}</li> <li><b>Descripcion: </b>${theaters[i]["description"]}</li>`;
  }

  return `<h1> Nuestras Salas</h1> 
    </br> Total de salas: <li>${total_rooms}</li>
    </br> Listado de salas: ${listado}
    `;
}

module.exports = {
  sucursales,
};
