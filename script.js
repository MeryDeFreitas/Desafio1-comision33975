let i = 3
let dataUsuario = prompt("Piedra, papel o tijera ¿Cual es tu jugada?")

while (i > 0){
console.log(i)
i--;
    if((dataUsuario != "") && ((dataUsuario == "Tijera") || (dataUsuario == "tijera") || (dataUsuario=="TIJERA"))){
        alert("¡Ganaste!")
    } else if((dataUsuario != "") && ((dataUsuario == "Piedra") || (dataUsuario == "piedra") || (dataUsuario=="PIEDRA"))){
        alert("¡Empate!")
    } else if((dataUsuario != "") && ((dataUsuario == "Papel") || (dataUsuario == "papel") || (dataUsuario=="PAPEL"))){
    alert("¡Perdiste!")
     } else{
        alert("Dato no válido")
     }
     dataUsuario = prompt("Piedra, papel o tijera ¿Cual es tu jugada?")
}