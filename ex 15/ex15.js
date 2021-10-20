let numero = prompt("Digite um número de 1 a 10 para mostrar sua tabuada")
let result = 0 

for (let i = 1; i <= 10; i++){
    
    result = numero * i
    console.log(`${numero} x ${i} = ${result}`)
}