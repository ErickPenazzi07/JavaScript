//condição simples única

var anoNascimento = 2007;

if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003) console.log(`A pessoa nasceu em de 2003!`);

//condicional simples if- else

// var anoNascimento = 2002;

// if (anoNascimento < 2000)
//     console.log("A pessoa nasceu antes de 2000")
// else
//     console.log("A pessoa nasceu depois de 2000")

// //função sinaleiro
// function sinaleiro(cor) {
//   if (cor == "vermelho") console.log(`Pare`);
//   else if (cor == "amarelo") console.log(`Preste atenção`);
//   else if (cor == "verde") console.log("Siga");
//   else
//     console.log("Você informou cores diferentes de verde, amarelo ou vermelho");
// }

// sinaleiro("vinho");

//Condicional composto com if

const login = "admin"
var senha = "123456"

        //banco de dados
        const loginUser = "admin"
        const senhaUser = "admin"

if (login == loginUser || senha == senhaUser)
    console.log("Acesso Permitido")
else
    console.log("Acesso Negado")
console.log("-----------------------------------------------")
    var idade = 18

    if (idade <= 18) {
        console.log("entrou no if....")
        idade++, console.log("Incrementei a idade...")
        console.log(`A nova idade é ${idade}`)
        console.log(`Agora estou saindo do bloco de codigos if`)
    }
    console.log(`Terminei!`)

    //desvio consicional if inline (ternário)
        //validação (algo == algo) ou (algo > algumacoisa)
        // ? (IF)
        //se for verdadeiro
        // : (ELSE)
        //Se for falso
        //testeDeValidacao == teste ? "Bla Bla" : ("Ble ble")
        
    var preco = 100

    var resultado = preco <= 100 ? "tá barato" : "Vish ta caro!"

    console.log(resultado)