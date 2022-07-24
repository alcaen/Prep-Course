// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return (array[0]);
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
}


function devolverUltimoElemento(array) {
  return (array[array.length - 1]);
  // Devuelve el último elemento de un array
  // Tu código:
}


function obtenerLargoDelArray(array) {
  return (array.length);
  // Devuelve el largo de un array
  // Tu código:
}


function incrementarPorUno(array) {
  let newarray = [];
  array.forEach(element => {
    newarray.push(element + 1);
  });
  return (newarray);
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento)
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  return (array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento)
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  return (array);
}


function dePalabrasAFrase(palabras) {
  let unido = '';
  palabras.forEach(element => {
    unido = unido + element + ' ';
  });
  return (unido.trim());
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return (array.includes(elemento));
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let tot = 0;
  numeros.forEach(element => {
    tot = tot + element;
  });
  return (tot);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let tot = 0;
  resultadosTest.forEach(element => {
    tot = tot + element;
  });
  return (tot / resultadosTest.length)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let tot = 0;
  numeros.forEach(element => {
    if (element > tot) {
      tot = element;
    }
  });
  return (tot);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  switch (arguments.length) {
    case 0:
      return (0);
    case 1:
      return (arguments[0]);
    default:
      let args = Array.from(arguments);
      let tot = 1;
      args.forEach(element => {
        tot = tot * element;
      });
      return (tot);
  }
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var n = 0;
  arreglo.forEach(element => {
    if (element > 18) {
      n++;
    }
  });
  return (n)

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  const fin = [1, 7];
  const lab = [2, 3, 4, 5, 6];
  if (fin.includes(numeroDeDia)) {
    return ('Es fin de semana')
  } else if (lab.includes(numeroDeDia)) {
    return ('Es dia Laboral')
  }
}


function empiezaConNueve(n) {
  const arr = Array.from(String(n), Number);
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (arr[0] == 9) {
    return (true);
  } else {
    return (false);
  };
}


function todosIguales(arreglo) {
  for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    if (element !== arreglo[0]) {
      return (false);
    };
  };
  return (true);
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

}


function mesesDelAño(array) {
  var list = [];
  if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element === 'Enero' || element === 'Noviembre' || element === 'Marzo') {
        list.push(element);
      }
    }
    return (list);
  } else {
    return ('No se encontraron los meses pedidos');
  }

  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var list = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 100) {
      list.push(element);
    }
  }
  return (list);
}


function breakStatement(numero) {
  const list = [];
  for (let index = 0; index < 10; index++) {
    numero += 2;
    list.push(numero);
    if (numero === index) {
      return ('Se interrumpió la ejecución')
    };
  }
  return (list);
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  const list = [];
  for (let index = 0; index < 10; index++) {
    if (5 === index) {
      continue;
    };
    numero += 2;
    list.push(numero);
  }
  return (list);
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
