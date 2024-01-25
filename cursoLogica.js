let idade = 30
console.log("valor da minha variavel " + idade)
idade = 30 + 6
console.log(idade)

// Multiplicação

let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando

console.log("Resultado da multiplicação é " + produto)

multiplicador = 8
produto = multiplicador * multiplicando
console.log("Resultado da multiplicação é " + produto)

// Divisão

let notaMercado = 50
console.log("Operação de divisão: " + notaMercado / 2)

// operação de modulo ( é o resto da divisao)

let calculo = 10 % 3
console.log("operacao de modulo " + calculo)

//incremento e decremento

// incremento é adicionar + 1

let contador = 1
contador++
console.log(contador)

//decremento é subtrair --

contador = - 1
contador--
contador--
console.log(contador)

//calcular e atribuir(o valor somando ou diminuindo de forma abrev)

let preco = 10
preco += 5 //preco = preco + 5
preco -= 5 //preco = preco - 5
console.log(preco)

preco -= 5 //preco = preco - 5
console.log(preco)

//Definindo escopo

let resultado = 2 * 5 + 5
console.log(resultado)

// toda vez que vc coloca () nos calculos eles sao calculados primeiro

resultado = 2 * (5 + 5)
console.log(resultado)
resultado = 2 * ((5 + 5) - 10)
console.log(resultado)

// operadores de comparação

// operadores de igual ou diferente

let numero = "1"
console.log(numero == "1")
console.log(numero === 1)

// = é atribuição
// == é para comparar o valor
// === é para o valor e o formato do conteudo

// !== é diferente ?
let marca = "Apple"
console.log(marca === "Apple")
console.log(marca !== "Apple")

// guardar valor em uma variavel de resultado

 marca = "Apple"
valor = marca === "samsung"
console.log(valor)

//guardar valor em uma variavel de resultado TRUE ? FALSE

let cpfBloqueado = "121.123.123.45"
let cpfUsuario = "222.111.222.09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado
console.log("o usuario está barrado ? " + ehCPFBloqueado)

// segundo exemplo

let cpfPermitido = "121.123.123.45"
let cpfDousuario = "222.111.222.09"
let ehBloqueado = cpfDousuario !== cpfPermitido
console.log("é usuario invalido ? " + ehBloqueado)

// trabalhando com operadores de maior e menor

let idadeMinima = 18
let idadeUsuario = 17
let idadePermitidaValida = idadeUsuario > idadeMinima
console.log(idadePermitidaValida)

 idadeMinima = 18
 idadeUsuario = 18
 idadePermitidaValida = idadeUsuario >= idadeMinima
 console.log(idadePermitidaValida)

 let idadeDecorte = 50
 let idadeDousuario = 45
 let ehResultadoTerceiraidade = idadeDecorte < idadeDousuario
console.log(ehResultadoTerceiraidade)


 idadeDecorte = 50
 idadeDousuario = 50
 ehResultadoTerceiraidade = idadeDecorte <= idadeDousuario
console.log(ehResultadoTerceiraidade)

// operadores logicos and or

// operador AND (&&)

idade = 18
let vistoVerificado = true
console.log((idade >= 18) && (vistoVerificado === true))


// operador OR (||) o boneco so pode sair se estiver sem chuva or com guarda -chuva
// no Or se uma das xondiçoes forem verdadeiras retorna true

let tempo = "sol"
let item =  "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair )

// operador NOT nega uma afirmação

tempo = "chuva"
resultado = tempo !== "chuva"
resultado = tempo === "chuva"
console.log(!resultado)

// mudar polaridade 


tempo = "chuva"
let horario = 8
resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)

// trabalhando com condicionais IF
// sao blocos de codigos que só serao executados se a condição for verdadeira
// tudo que estiver dentro do IF só retorna se a expressao for true

let ehLigado = true
if(1 === 1){
    console.log("executou o comando")
}


// else

let possuiOvos = false
let itensComprados = ""
if(possuiOvos){
    itensComprados = "leite"
}
else{
    console.log("passou na sessao de congelados")
    itensComprados = "lasanha congelada"
}
console.log("item comprado: " + itensComprados)

// else if

let nivelDefome = 1
if(nivelDefome === 10){
 console.log("pouca fome")
}else if(nivelDefome === 2){
    console.log("muita fome")

}else{
    console.log("voce comeria mais que o pica pau")
}

// introdução ao switch case
// uma estrutura de decisão
// switch / case/break/default

let fruta = "uva"
switch(fruta){
    case "laranja":
    console.log("suco de laranja")
    break
    case "banana":
    console.log("vitamina de banana")
    break
    default:
        console.log("suco generico")
}
// trabalhando com estruturas de repetição
// for
for(let contador = 0; contador < 4; contador++)
{   console.log(contador)
    console.log("aumentando o contador")

}

let pontosDeVida = 0
for(let i = 0; i < 11; i++){
    pontosDeVida += 1
    console.log("tomou poção magica " + i)
}
console.log(pontosDeVida + "totais")

// while
// contador++ ou i++ é para nao ficar no loop infinito
 
contador = 0
while (contador < 3){
    contador++
    console.log("olá") 
}

// do while do = faça while = enquanto
contador = 0

do{
    console.log("olá")
    contador++
}while(contador < 3)

