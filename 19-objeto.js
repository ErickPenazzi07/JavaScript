// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.line} e eu tenho ${this.idade} ano`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //Criando objeto do "tipo" Pessoa
// var pessoa1 = new Pessoa("Taldo Erick", 52);
// var p2 = new Pessoa("Taldo Pedrin", 18);

// pessoa1.apresentarSe();
// p2.apresentarSe;

// pessoa1.envelhecer();
// p2.envelhecer;

// //-----------------------------------------------------------------

// //Abstração

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`${this.nome} foi alimentado`);
//   }
// }

// const meuPet = new Pet ("Rex", 2, "Cachorro")

// console.log(`Meu pet é um ${meuPet.nome} e tem ${meuPet.idade} anos!`)

// meuPet.alimentar()

// console.log("--------------------Herança--------------------");
// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }



//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }



//   emitirSom() {
//     console.log(`Barulho padrão de animal!`);
//   }
// }



// class Cachorro extends Animal {
//   alimentar() {
//     console.log(`O cachorro ${this.nome} foi alimentado`);
//   }



//   emitirSom() {
//     console.log(`🐶 Au au! 🐶`);
//   }
// }
// const pet = new Animal("Carlos", 10, "Comida espacial");
// const meuCachorro = new Cachorro("Rex", 3, "Ração");

// pet.alimentar()
// pet.emitirSom()
// console.log()

// console. log("--------------------Encapsulamento--------------------");
// class Petzinho(){
// constructor(nome, idade, tipo) 
 
// this.nome(nome)
// this.idade(idade)
// this.tipo(tipo)

// getNome() 
// return this.nome;

// setNome(novoNome) {
// this.nome = novoNome;
// }

// const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");

// console. log(novoPetzinho.getNome()); // "Bob"
// novoPetzinho.setNome("Rex");
// console. log(novoPetzinho.getNome()); // "Rex"

console.log("--------------------Polimorfismo--------------------");
class Animal {
  constructor(nome) {
    this.nome = nome;
  }


  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}


class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O cachorro late!");
  }
}


class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }


  fazerBarulho() {
    console.log("O gato mia!");
  }
}


// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];


for (const animal of animais) {
  animal.fazerBarulho();
}

// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino. A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.


// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)


// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:


class Aluno{
    constructor(ra, nome, dataNascimento, curso) {

     this.ra=ra
     this.nome=nome
     this.dataNascimento=dataNascimento
     this.curso=curso
    }
    calcularIdade(){
    return 2024 - this.dataNascimento}

    apresentarSe(){
    return console.log (`Olá meu nome é ${this.nome} e tenho ${this.calcularIdade()} anos, faço o curso de ${this.curso} e meu ra é ${this.ra}.`)}
}

const Aluno1 = new Aluno(4364, "Erick Penazzi", 2007, "T.I")


Aluno1.apresentarSe()



//Criando uma classe Retângulo

class Retangulo{
constructor (comprimento, largura){

this.comprimento = comprimento;
this.largura = largura
}

obterArea() {
return this .comprimento * this.largura;}

obterperimetro(){
  return this.comprimento * 2 + this.largura*2
}
setComprimento(novoComprimento){
  this.comprimento = novoComprimento
}
setLargura(novalargura){
  this.largura = novalargura
}
}

//Criando um objeto do "tipo" Retangulo

const ret1 = new Retangulo(10, 15)

function displayRet(retangulo){
console.table(retangulo);
console.log(`comprimento = ${retangulo.comprimento}`)
console.log(`largura = ${retangulo.largura}`)
console.log(`área = ${retangulo.obterArea()}`)
console.log(`perimetro = ${retangulo.obterperimetro()}`)
}

displayRet(ret1)
ret1.setComprimento(20)
displayRet(ret1)
ret1.setLargura(20)
displayRet(ret1)