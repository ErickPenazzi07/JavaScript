// laço de repetição FOR
//escrever  para o usuário 1000x "Prestar mais atenção na aula"

for (let i = 0; i < 1000; i ++ ) {
  console.log(i);
}

//Escreva todas os números de 1 a 20 com For

for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// Escreva números impares com IF

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0);
  {
    console.log(i);
  }
}

//Dado um vetor com números 5,6,8,14,0,9,7,2
//Calcule e exiba e somatória de seus elementos utilizando
//FOR

const nun = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;

for (let i = 0; i < nun.length; i++) {
  somar += nun[i];
}

console.log(`A soma dos elementos do array é: ${somar}`);

//Dado um vetor com números 5,6,8,14,0,9,7,2
//multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostro e novo vetor

var numero = [5, 6, 8, 14, 0, 9, 7, 2];

console.table(numero);

for (let i = 0; i < numero.length ; i++) {
  numero [i]*= 3;
}
console.table(numero);

//Dado a matriz 2x3, escrever para o usuario todos os seus elementos
//com a respectiva posição da matriz
[8,4,1]
[3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[${linha}, ${coluna}] - ${matriz[linha][coluna]}`);
  }
}

