//criando um objeto do tipo data
var data1 = new Date()
console.log(data1)



//extraindo partes de uma data
var data3 =  new Date("2023-03-16")
console.log(`Data ${data3}`)
console.log(`Ano ${data3.getFullYear()}`)
console.log(`Mes ${data3.getMonth()}`)
console.log(`Dia ${data3.getDate()}`)

const mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]

console.log(`retomando o mês por escrito`)
console.log(`mês: ${mes[data3.getMonth()]}`)

const semana = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado"
]

console.log(`Dia: ${semana[data3.getDay()]}`)

console.log(" ===============================");
const dataNasc = new Date("2007=03-14");
const dataAtual = new Date();


const diferenca = dataAtual.getTime() - dataNasc.getTime();
//console.log(`Diferença: ${diferenca}`);
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade}`);


console.log("==============")


const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);


if(dataAtual.getMonth() < dataNasc.getMonth() || 
  (dataAtual.getMonth() === dataNasc.getMonth() && 
  dataAtual.getDate() < dataNasc.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Idade: ${diferencaAnos - 1}`);
  }


  //