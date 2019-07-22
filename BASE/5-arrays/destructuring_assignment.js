var animals = new Array("Cão", "Gato", "Rato")

/* // sem uso de destructuring
var cao = animals[0]
var gato = animals[1]
var rato = animals[2]

console.log(cao, gato, rato) */


// sem uso de destructuring
var [cao, gato,rato] = animals
console.log(cao, gato, rato)