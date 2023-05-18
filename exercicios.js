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
console.log(retornaUltimoElemento(["ola", "abc"]))




// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}













// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}