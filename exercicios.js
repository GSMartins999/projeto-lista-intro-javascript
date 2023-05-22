// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    let altura = Number(prompt("Altura:"))
    let largura = Number(prompt("Largura:"))
    let area = altura*largura;
    console.log(area);
    
}

// calculaAreaRetangulo()

// EXERCÍCIO 02   
function imprimeIdade() {
    const anoAtual = Number(prompt("Digite o ano atual: "))
    const anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))
    console.log(anoAtual - anoNascimento)
} 

//imprimeIdade()


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  //Escreva dentro da função calculaIMC uma lógica que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea)     I
  //MC = Peso ÷ (Altura × Altura)

  return peso / (altura * altura)

 
}

//console.log(calculaIMC(85, 1.8))



// EXERCÍCIO 04  
// Escreva dentro da função imprimeInformacoesUsuario uma lógica que pede ao usuário seu nome, sua idade e seu email (nessa ordem), e imprime no console uma mensagem como a seguinte:
//  Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.
function imprimeInformacoesUsuario() {
    const nome = prompt("Digite seu nome: ")
    const idade = Number(prompt("Digite sua idade: "))
    const email = prompt("Digite seu email: ")
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// imprimeInformacoesUsuario()


// EXERCÍCIO 05
//  Escreva dentro da função imprimeTresCoresFavoritas uma lógica que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.

function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua cor favorita número 1: ")
  const cor2 = prompt("Digite sua cor favorita número 2: ")
  const cor3 = prompt("Digite sua cor favorita número 3: ")
  const arrayTodasAsCores = [cor1,cor2, cor3]
  console.log(arrayTodasAsCores)
}

// imprimeTresCoresFavoritas()

// EXERCÍCIO 06 
//  Escreva dentro da função retornaStringEmMaiuscula uma lógica que recebe uma string e retorna ela em letra maiúscula.
function retornaStringEmMaiuscula(string) {

  return string.toUpperCase()
  
  
}

// console.log(retornaStringEmMaiuscula("aaaaaaaaaaaaaaaaaaaaaa"))

// EXERCÍCIO 07
//  Escreva dentro da função calculaIngressosEspetaculo uma lógica que recebe o custo de um espetáculo de teatro e o valor de cada ingresso (considere que todos os ingressos têm o mesmo preço) e retorna quantos ingressos precisam ser vendidos para que o espetáculo não dê prejuízo.
function calculaIngressosEspetaculo(custo, valorIngresso) {

  
  return custo / valorIngresso
}

// console.log(calculaIngressosEspetaculo(5500 , 50))

// EXERCÍCIO 08
//  Escreva dentro da função checaStringsMesmoTamanho uma lógica que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length == string2.length
  
}

// console.log(checaStringsMesmoTamanho("ola","ola"))




// EXERCÍCIO 09
//  Escreva dentro da função retornaPrimeiroElemento uma 
//lógica que recebe um array e retorna o primeiro elemento.
function retornaPrimeiroElemento(array) {
    return array[0]
}
// console.log(retornaPrimeiroElemento(["frango","arroz"]))



// EXERCÍCIO 10
//Escreva dentro da função retornaUltimoElemento uma lógica que recebe um array e retorna o último elemento.
function retornaUltimoElemento(array) {
  return array.pop()
}
// console.log(retornaUltimoElemento(["ola", "abc"]))




// EXERCÍCIO 11
//  Escreva dentro da função trocaPrimeiroEUltimo uma lógica que recebe um array e retorna um array com o primeiro e o último elemento trocados.
function trocaPrimeiroEUltimo(array) { 
  let troca = array[0]

  array[0] = array[array.length-1]

  array[array.length-1] = troca

  return array  
}

// console.log(trocaPrimeiroEUltimo([1,2,3,4,5]))

// EXERCÍCIO 12
//  Escreva dentro da função checaIgualdadeDesconsiderandoCase uma lógica que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  const compara = string1.toUpperCase() === string2.toUpperCase()
  return (compara)
}

// console.log(checaIgualdadeDesconsiderandoCase("Ola","pika"))













// EXERCÍCIO 13
//  Escreva dentro da função checaRenovacaoRG uma lógica que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nesta ordem). 

//A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// * Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, também deve ser renovada).
// * Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, também deve ser renovada).
// * Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos


function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual: "))
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento"))
  const anoQueSuaIdentidadeFoiEmitida = Number(prompt("Digite o ano em que sua indentidade foi emitida: "))
  const renovada = anoNascimento - anoAtual >= 20
  console.log(renovada)
  const precisa = anoQueSuaIdentidadeFoiEmitida - renovada <= 5
  console.log(`A sua identidade precisa renovar ${precisa}`)





  // const compara2 = anoNascimento - anoAtual >= 20
  // console.log("Sua identidade precisa ser renovada", compara2)
  // const compara3 = anoNascimento - anoAtual > 50 
  // console.log("Sua identidade precisa ser renovada",compara3)
}

console.log(checaRenovacaoRG())
// EXERCÍCIO 14

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}