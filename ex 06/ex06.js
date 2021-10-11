//ex 06
let soma = 0

for (let i = 1; i < 3; i++){

  let nota = prompt(`Insira a nova da AV${i}: `)
  soma += parseFloat(nota)
  media = soma/2
}

if (media > 0 && media < 7){
  console.log(`Média: ${media} | Conceito: REPROVADO!`)

} else if(media == 10){
  console.log(`Média: ${media} | Conceito: APROVADO COM DISTINÇÃO!`)

} else{
  console.log(`Média: ${media} | Conceito: APROVADO!`)
}