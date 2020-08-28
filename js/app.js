// Variables
const clear = document.getElementById('clear')
const div = document.getElementById('div')
const multi = document.getElementById('multi')
const res = document.getElementById('res')
const suma = document.getElementById('suma')

const num9 = document.getElementById('num9')
const num8 = document.getElementById('num8')
const num7 = document.getElementById('num7')
const num6 = document.getElementById('num6')
const num5 = document.getElementById('num5')
const num4 = document.getElementById('num4')
const num3 = document.getElementById('num3')
const num2 = document.getElementById('num2')
const num1 = document.getElementById('num1')
const cero = document.getElementById('cero')
const doble0 = document.getElementById('doble0')
const pun = document.getElementById('punto')

const igual = document.getElementById('igual')

// Events Listeners
eventListeners();

function eventListeners() {
    div.addEventListener('click', division)
    multi.addEventListener('click', multipicacion)
    clear.addEventListener('click', limpiar)
    res.addEventListener('click', restar)
    suma.addEventListener('click', sumar)

    num9.addEventListener('click', nueve)
    num8.addEventListener('click', ocho)
    num7.addEventListener('click', siete)
    num6.addEventListener('click', seis)
    num5.addEventListener('click', cinco)
    num4.addEventListener('click', cuatro)
    num3.addEventListener('click', tres)
    num2.addEventListener('click', dos)
    num1.addEventListener('click', uno)
    cero.addEventListener('click', cero0)
    doble0.addEventListener('click', doblecero)
    pun.addEventListener('click', punto)
    igual.addEventListener('click', equal)
}

// Functions

function limpiar() {
    let limpiar = document.calc.txt.value = ''
}

function division() {
   let division = document.calc.txt.value += '/'
}

function multipicacion() {
    let multiplicacion = document.calc.txt.value += '*'
}

function restar() {
    let resta = document.calc.txt.value += '-'
}

function sumar() {
    let sumar = document.calc.txt.value += '+'
}

function nueve() {
    let nueve = document.calc.txt.value += '9'
}
function ocho() {
    let ocho = document.calc.txt.value += '8'
}
function siete() {
    let siete = document.calc.txt.value += '7'
}
function seis() {
    let seis = document.calc.txt.value += '6'
}
function cinco() {
    let cinco = document.calc.txt.value += '5'
}
function cuatro() {
    let cuatro = document.calc.txt.value += '4'
}
function tres() {
    let tres = document.calc.txt.value += '3'
}
function dos() {
    let dos = document.calc.txt.value += '2'
}
function uno() {
    let uno = document.calc.txt.value += '1'
}
function cero0() {
    let cero0 = document.calc.txt.value += '0'
}
function doblecero() {
    let doblecero = document.calc.txt.value += '00'
}
function punto() {
    let punto = document.calc.txt.value += '.'
}
function equal() {
    let equal = document.calc.txt.value = eval(calc.txt.value)
}