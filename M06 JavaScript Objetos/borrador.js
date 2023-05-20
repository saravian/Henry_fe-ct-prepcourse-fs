function invocarMetodo(objeto, metodo) {
    // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
    // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
    // [NOTA]: no necesitar retornar nada.
    // Tu código:
    objeto[metodo] = [function(){}];
    objeto.metodo()
  }

console.log(objeto)