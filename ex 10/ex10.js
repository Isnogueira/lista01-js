let maior = 0

for(let i = 1; i <= 5; i++){

    let numero = parseInt(prompt(`Insira o ${i}º numero`))
   
    if(numero > maior){
        maior = numero
    }
}

console.log(`O maior número é ${maior}.`)
