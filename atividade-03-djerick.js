var frutas = ["Uva", "Banana", "Maçã", "Pera", "Morango"];

console.table(frutas);
console.log("");

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiaba");
console.table(frutas);
console.log("");

console.log("A Quinta Posição está a", frutas[5]);

frutas.splice(1, 1);
console.table(frutas);

// var position = frutas.indexOf("Uva")
// console.log(position)
// frutas.slice(position, 1)
// console.table(frutas);

var number = [1, 2, 3, 4, 5];
console.log("O 3° elemento é", +number[2]);
console.table(number);

var copianumber = number.slice()
console.log("A copia do vetor original:")
console.table(copianumber);

copianumber[0] = number[0]*2
copianumber[1] = number[1]*2
copianumber[2] = number[2]*2
copianumber[3] = number[3]*2
copianumber[4] = number[4]*2

console.table(copianumber);

