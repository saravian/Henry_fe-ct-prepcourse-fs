var notOk = ["Marzo", "Diciembre", "Julio", "Noviembre"];
var ok = [
  "Marzo",
  "Diciembre",
  "Abril",
  "Junio",
  "Julio",
  "Noviembre",
  "Enero",
  "Mayo",
  "Febrero",
];

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var meses = ["Enero", "Marzo", "Noviembre"];
  var resultado = [];
  for (var i = 0; i < array.length; i++) {
    var consulta = array[i];
    //      console.log(consulta);
    var check = meses.includes(consulta);
    //     console.log(check);
    if (check == true) {
      resultado.push(consulta);
    }
  }
  if (meses.length === resultado.length) {
    console.log(resultado);
    return resultado;
  } else {
    console.log("No se encontraron los meses pedidos");
    return "No se encontraron los meses pedidos";
  }
}

mesesDelAño(ok);
mesesDelAño(notOk);

function mesesDelAños(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var meses = ["Enero", "Marzo", "Noviembre"];
  var resultado = [];
  for (var i = 0; i < array.length; i++) {
    var consulta = array[i];
    if (meses.includes(consulta) == true) {
      resultado.push(consulta);
    } else {
      return "No se encontraron los meses pedidos";
    }
  }
  return resultado;
}
