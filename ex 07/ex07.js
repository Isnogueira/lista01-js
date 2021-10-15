//ex 07
let horas = new Date()

horas.setHours(14)

if(horas.getHours() >= 6 && horas.getHours() < 12){

  console.log(horas.getHours())
  console.log("Buenos dias")

}else if(horas.getHours() >= 12 && horas.getHours() < 18){

  console.log(horas.getHours())
  console.log("Buenas tardes")

}else{

  console.log(horas.getHours())
  console.log("Buenas noches")
}