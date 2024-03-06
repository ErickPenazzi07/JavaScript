var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz);
console.log("");

console.log(
  "O numeros em diagonais são:",
  matriz[0][0],
  matriz[1][1],
  matriz[2][2]
);
console.log(
  "O numeros em diagonais são:",
  matriz[0][2],
  matriz[1][1],
  matriz[2][0]
);
console.log(
  "O numeros em diagonais são:",
  matriz[2][0],
  matriz[1][1],
  matriz[0][2]
);
console.log(
  "O numeros em diagonais são:",
  matriz[2][2],
  matriz[1][1],
  matriz[0][0]
);
console.log("");

var dados = ["Erick", 16, "Roxo", "Maçã", "Orlando Ometto", "Truta"];

console.log("Olá", dados[0], "! Seja bem vindo ai nosso sistema,");
console.log("Você mora no", dados[4], "e tem um pet chamado", dados[5]);
console.log("Sua idade é", dados[1], "anos", "e gosta muita de", dados[3]);
console.log("E sua cor favorita é", dados[2]);

