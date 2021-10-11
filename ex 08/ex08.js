// ex 08
let lados = [];
let resp = " "

for (let i = 1; i < 4; i++){

  let lado = prompt(`Informe o ${i}º lado do triangulo: `)
  lados.push(lado)
}

let ladoA = parseInt(lados[0])
let ladoB = parseInt(lados[1])
let ladoC = parseInt(lados[2])

if ((ladoA + ladoB) > ladoC || (ladoC + ladoB) > ladoA || (ladoA + ladoC) > ladoB) {
  
  resp = "É um triângulo "

}

// MELHORAR A LÓGICA

if (resp == "É um triângulo "){

  if(ladoA != ladoB  && ladoB != ladoC && ladoC != ladoA){
    
    resp += "Escaleno."
    console.log(resp)

  } else if (ladoA == ladoB == ladoC){
   
    resp += "Equilátero."
    console.log(resp)

  } else {

    resp += "Isósceles."
    console.log(resp)
  }

} else{

  resp = "Não é um triângulo! "

}

