// //contagem regressiva

// let countdown = 5

// while (countdown > 5) {
//   console.log(countdown)
//   countdown--;
// }

// console.log("Lançamento")

// //Estourando o limite do cartão - versão while 

// let limite = 500
// let fatura = 0

// while (fatura <= limite ) {
//   let gasto = Math.random() * 100
//   fatura += gasto;
//   console.log(`Guardei R$ ${gasto.toFixed(2)} --------
//    Fatura: R$ ${fatura.toFixed(2)}`)
  
//    fatura>limite
//    && console.log(`Estourou o limite do cartão`);
//   }


  var Rodada = 1
  var moeda = ""
  var escolhaJogador = ""
  var vitoria = 0
  var derrota = 0

  while (Rodada <= 3) {
    moeda = Math.random() >= 0.5 ? "Cara" : "Coroa"
    escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa"

    if (escolhaJogador == moeda){
        console.log(`Parabéns, você escolheu ${escolhaJogador} e caiu ${moeda}, você ganhou`)
      vitoria++;
      console.log(moeda)
    } else {
        console.log(`Que pena, você escolheu ${escolhaJogador} e caiu ${moeda}, você perdeu`)
        derrota++
        console.log(moeda)
}
  Rodada ++  

  }

  console.log("---------------------------------")
  console.log("            Placar               ")
  console.log("---------------------------------") 
  console.log(`Vitória ${vitoria}`)
  console.log(`Derrota ${derrota}`)
