// const numeros = [1, 2, 3, 4,5]
// console.log(numeros)
// console.log(numeros[2])

// numeros [2]=6
// console.log(numeros)
// console.log(numeros[2])

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro indice do array
console.log("");
console.table(dinos); //cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//adionando elementos ao vetor existente
dinos.push("Brontossauro", "Velocirapitor");
console.table(dinos);

dinos.unshift("Mamute"); //adiciona itens no inicio do array
console.table(dinos);

//Obtendo um elemento com base em seu índice
console.log("Primeira posição", dinos[0]);
console.log("segunda posição:", dinos[1]);
console.log("Item da posição 20:", dinos[20]);

//removendo elementos do vetor
dinos.pop(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.shift(); //removendo o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //removendo o elemento a partir do índice 1, contando 1.
console.table(dinos);
console.log("");

console.log("--------------------CONTINUAÇÃO DA AULA----------------------");
console.log("");
var dinos = [
  "Triceratops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Mingossauro",
  "Magalodonte",
  "DjErickSauro",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "DjErickSauro";
var posicao = dinos.indexOf(elementoProcurado);

console.log("O" + elementoProcurado + " está no índice " + posicao);
console.log("");

var elementoProcurado = "Estegossauro";
var posicao = dinos.indexOf(elementoProcurado);

console.log("O" + elementoProcurado + " está no índice " + posicao);
console.log("");

var elementoProcurado = "Espinossauro";
var posicao = dinos.indexOf(elementoProcurado);

console.log("O" + elementoProcurado + " está no índice " + posicao);

//criando cópia de array (vetor)

var copia1 = dinos.slice();
console.log("Vetor copia 1 ");
console.table(copia1);

var copia2 = dinos.slice(1, 1);
console.log("Vetor copia 2 ");
console.table(copia2);
