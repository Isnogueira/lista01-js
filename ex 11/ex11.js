let soma = 0

for(let i = 1; i <= 5; i++){

    let numero = parseFloat(prompt(`Insira o ${i}ª nota`))
    soma += numero
}

let media  = soma / 2

console.log(`A soma das notas é ${soma}`)
console.log(`A media das notas é ${media}`)