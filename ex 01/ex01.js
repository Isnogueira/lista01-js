// ex 1

let total = 0

for (let i = 1; i < 4; i++){
  let nota = prompt(`Insira a ${i}º nota:`)
  total += parseFloat(nota)
}

console.log(`A média das notas: ${total/4}`)
