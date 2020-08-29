// Variables
const colorSwitch = document.querySelector('.tema-switch input[type="checkbox"]')


// Event Listeners
eventListeners()

function eventListeners() {
    colorSwitch.addEventListener('change', switchColor, false)
}


// Funciones
function switchColor (e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'blanco')
    } else {
        document.documentElement.setAttribute('data-theme', 'negro')
    }
}