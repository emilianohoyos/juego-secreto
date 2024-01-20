let intentos = 0
let numeroSecreto = 0
let numeroMaximo = 100
let listaNumeroSorteados = []

condicionesIniciales()

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`)
        document.getElementById(reiniciar).removeAttribute('disabled')
    } else {

        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', `El numero secreto es menor`)

        } else (
            asignarTextoElemento('p', 'El numero secreto es mayor')

        )
        intentos++
        limpiarCaja()
    }
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1

    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros sorteados')
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            generarNumeroSecreto()
        } else {
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }

}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = ''
}

function reiniciarJuego() {
    limpiarCaja()
    condicionesIniciales()
    document.getElementById(reiniciar).setAttribute('disabled')
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto')
    asignarTextoElemento('p', `Ingrese un numero del 1 al ${numeroMaximo}`)
    intentos = 1
    numeroSecreto = numeroSecreto()

}