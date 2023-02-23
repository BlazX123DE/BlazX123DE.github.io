let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let btnSeleccionar = document.getElementById("seleccionar-btn")
    btnSeleccionar.addEventListener("click", seleccionarMascotaJugador)

    let fuego = document.getElementById("fuego")
    fuego.addEventListener("click", ataqueFuego)
    let agua = document.getElementById("agua")
    agua.addEventListener("click", ataqueAgua)
    let tierra = document.getElementById("tierra") 
    tierra.addEventListener("click", ataqueTierra)
}
function seleccionarMascotaJugador() {
    let hipodoge = document.getElementById("hipodoge")
    let capipepo = document.getElementById("capipepo")
    let ratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    if(hipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if(capipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if(ratigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else  {
        alert("Debes elegir una mascota...")
    }
    seleccionarMascotaEnemigo() 
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3) 
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if(mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}
//ATAQUES
function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3) 
    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else if(ataqueAleatorio == 3) {
        ataqueEnemigo = "Tierra"
    }   
    mensajeDinamico()
}

function mensajeDinamico() {
    let parrafo = document.createElement("p") 
    let sectionMensaje = document.getElementById("mensajes")
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ". La mascota del enemigo ataco con " + ataqueEnemigo
    sectionMensaje.appendChild(parrafo)
    combate()
}
//COMBATE
function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    let resultadoAtaques = document.getElementById("resultado-ataque")

    if(ataqueJugador = ataqueEnemigo) {
        resultadoAtaques.innerHTML = "Empate."
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        resultadoAtaques.innerHTML = "Ganaste."
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        resultadoAtaques.innerHTML = "Ganaste."
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        resultadoAtaques.innerHTML = "Ganaste."
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        resultadoAtaques.innerHTML = "Perdiste."
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
}







window.addEventListener("load", iniciarJuego)