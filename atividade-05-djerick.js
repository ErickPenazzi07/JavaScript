// //Criando uma funçao que apresenta uma pessoa

// function apresentaPessoa(nome, idade, cidade) {
//     console.log(
//       `Apresento a vocês: ${nome}, que tem ${idade} e mora em ${cidade}!`
//     );
//   }
//   apresentaPessoa("Erick", 16, "Jaú");

//   function idade(anoAtual, anoAniver) {
//     return `Eu tenho ${anoAtual - anoAniver} anos`;
//   }
//   console.log("")
//   console.log(`Eu tenho ${idade(2024, 2007)}!`);

//   function carro(kilometro, combustivel) {
//     return `Eu percorri ${kilometro * combustivel}Km com 30L de combustivel`;
//   }
//   console.log("")
//   console.log(`${carro(30, 12)}`);

//------------- Se ------------------------
// var idade = 50;

// if (idade < 16) console.log(`Não Vota`);

// if (idade > 16) console.log(`Obrigatório`);

//-------------função----------------------
// var idade = 80;

// function votar(idade) {
//   if (idade < 16) console.log("Não Vota");
//   else if (idade >= 16 && idade < 18) console.log("Não é Obrigatório");
//   else console.log("Você pode votar");
// }

// votar(idade);

// ------------Switch---------------

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log("Voce não pode Votar");
      break;
    case idade >= 16 && idade < 18:
      console.log("Voce pode Votar, mas não é obrigatório");
      break;

    default:
      console.log("voce pode votar");
      break;
  }
}

votacao(16);
