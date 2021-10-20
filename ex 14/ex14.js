let numeroInicial = parseInt(prompt("Informe o número inicial"))
let numeroFinal = parseInt(prompt("Informe o número final"))
let contador = numeroFinal - numeroInicial
let soma = 0

while (numeroInicial < contador){

    numeroInicial += 1
    soma += numeroInicial

}

console.log(`A soma dos números é ${soma}.`)
