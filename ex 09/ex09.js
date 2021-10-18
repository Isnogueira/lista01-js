let valorMorango;
let macaValor;

let pesoMorango = parseFloat(prompt("Informe o peso dos morangos em Kg:"))
let pesoMaca = parseFloat(prompt("Informe o peso das maçãs em Kg:"))

if (pesoMorango <= 5 ){
    valorMorango = 7.5 * pesoMorango
} else{
    valorMorango = 6.2 * pesoMorango
}
    
if (pesoMaca <= 5 ){
    valorMaca = 5.8 * pesoMaca
} else{
    valorMaca = 4.5 * pesoMaca
}

let pesoTotal = pesoMorango + pesoMaca
let valorTotal = valorMorango + valorMaca
 
if(pesoTotal > 8 || valorTotal > 25){

    valorTotal -= valorTotal * 0.1
}

console.log(`Total a ser pago pelo cliente: R$${valorTotal}`)
