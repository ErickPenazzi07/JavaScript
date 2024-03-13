// class Aluno {
//   constructor(ra, nome, dataNascimento, curso) {
//     this.ra = ra;
//     this.nome = nome;
//     this.dataNascimento = dataNascimento;
//     this.curso = curso;
//   }
//   calcularIdade() {
//     return 2024 - this.dataNascimento;
//   }

//   apresentarSe() {
//     return console.log(
//       `Olá meu nome é ${
//         this.nome
//       } e tenho ${this.calcularIdade()} anos, faço o curso de ${
//         this.curso
//       } e meu ra é ${this.ra}.`
//     );
//   }
// }

// const Aluno1 = new Aluno(4364, "Erick Penazzi", 2007, "T.I");

// Aluno1.apresentarSe();

// // Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// // Crie um sorvete de morango grande
// // Crie um sorvete de chocolate pequeno
// // Crie um sorvete de melancia medio
// // Altere o preço do sorvete de morango grande para R$ 10,51

// class Sorvete {
//   constructor(sabor, preco, tamanho) {
//     this.sabor = sabor;
//     this.preco = preco;
//     this.tamanho = tamanho;
//   }

//   Pedido() {
//     return console.log(
//       `Meu pedido é um sorvete de ${this.sabor} ${this.tamanho} o total é: ${this.preco}R$`
//     );
//   }
//   setnovopreco(novopreco) {
//     this.preco = novopreco;
//   }
// }

// const pedido1 = new Sorvete("Morango", 11, "Grande");
// const pedido2 = new Sorvete("Chocolate", 5, "Pequeno");
// const pedido3 = new Sorvete("Melancia", 7, "Medio");

// pedido1.Pedido();
// console.log("");
// pedido2.Pedido();
// console.log("");
// pedido3.Pedido();
// console.log("");
// pedido1.setnovopreco(10.51);
// pedido1.Pedido();

// // 1.Comparação de strings (sem case sensitive):
// // Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas).

// // 2.Extrair números de uma string:
// // Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.

// // 3.Inverter a ordem das palavras em uma frase:
// // Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a ordem das palavras invertida.

function compararStringsIgnorandoCase(string1, string2) {
  // Converte as duas strings para minúsculas e compara
  return string1.toLowerCase() === string2.toLowerCase();
}

// Exemplo de uso da função:
const string1 = "eRick";
const string2 = "ErIck";

if (compararStringsIgnorandoCase(string1, string2)) {
  console.log("As strings são iguais");
} else {
  console.log("As strings são diferentes");
}

console.log(
  "-----------------------------------------------------------------------------"
);

function extrairNumeros(string) {
  
  const numerosEncontrados = string.match(/\d+/g);

 
  if (numerosEncontrados) {
    
    return numerosEncontrados.map((numero) => parseInt(numero, 10));
  } else {
    
    return [];
  }
}

const stringExemplo = "Eu tenho 3 maçãs e 5 laranjas na cesta.";
const numerosEncontrados = extrairNumeros(stringExemplo);
console.log("Números encontrados são:", numerosEncontrados);

console.log(
  "-----------------------------------------------------------------------------"
);
function inverterOrdemPalavras(frase) {
  
  const palavras = frase.split(" ");

  const palavrasInvertidas = palavras.reverse();
  
  const fraseInvertida = palavrasInvertidas.join(" ");
  
  return fraseInvertida;
}

const fraseOriginal = "O Erick é o mais lindo";
const fraseInvertida = inverterOrdemPalavras(fraseOriginal);
console.log("Frase original:", fraseOriginal);
console.log("Frase invertida:", fraseInvertida);
