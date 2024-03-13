console.log("----------------------------");
console.log("         Atividade 07       ");
console.log("----------------------------");

var A = 100003;
var B = 300004;
var ano = 0;

while (A < B) {
  B += B * 0.015;
  A += A * 0.03;
  ano++;
}

console.log(`Quando chegar a ${ano} anos. `);
console.log("");
console.log("----------------------------");
console.log("         Atividade 08       ");
console.log("----------------------------");

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = Math.random() < 0.5 ? "X" : "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}

for (let rodada = 0; rodada < 9; rodada++) {
  if (jogadorX == "X") {
    jogar(jogadorX);
    jogadorX = "O";
    console.table(tabuleiro);
  } else {
    jogar(jogadorX);
    jogadorX = "X";
    console.table(tabuleiro);
  }
}

function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    //Verifica a coluna
    if (
      tabuleiro[0][i] == tabuleiro[1][i] &&
      tabuleiro[1][i] == tabuleiro[2][i] &&
      tabuleiro[1][i] !== " "
    ) {
      console.log(`O Jogador ${tabuleiro[1][0]} ganhou`);
      return tabuleiro[1][i];
    } else if (
      //verifica linha
      tabuleiro[i][0] == tabuleiro[i][1] &&
      tabuleiro[i][1] == tabuleiro[i][2] &&
      tabuleiro[i][1] !== " "
    ) {
      console.log(`O Jogador ${tabuleiro[i][1]} ganhou`);
      return tabuleiro[i][1];
    }
  }
    
  if (
    //verifica diagonal
      tabuleiro[0][0] == tabuleiro[1][1] &&
      tabuleiro[1][1] == tabuleiro[2][2] &&
      tabuleiro[1][1] !== " "
    ) {
      console.log(`O Jogador ${tabuleiro[1][1]} ganhou`);
      return tabuleiro[1][1];
    } else if (


      function compararstring(string1, string2){
        const strin1Miniscula = string1.tolowerCase()
        const strin2Miniscula = string2.tolowerCase()
      }