// Variables globales
let inputNum;
let contIntentos = 0;
let numAdivinar;



// Elementos del DOM
const userGuess = document.getElementById('userGuess');
const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');

// Iniciar el juego al cargar la página
window.onload = startNewGame;

// Configurar eventos
checkButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', startNewGame);
userGuess.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

/**
 * Inicia un nuevo juego
 */
function startNewGame() {
    // Generar número aleatorio entre 1 y 100
    numAdivinar =  Math.floor(Math.random()*100)+1
    
    
    // Actualizar interfaz
    contIntentos = 0;
    attemptsElement.textContent = contIntentos;
    messageElement.textContent = '';
    messageElement.className = 'message';
    userGuess.value = '';
    userGuess.focus();

    
    console.log('Nuevo juego iniciado. Número secreto:', numAdivinar);
}

/**
 * Comprueba el intento del usuario
 */
function checkGuess() {
    // Validar que el juego esté activo
  
    // Obtener el valor ingresado por el usuario
    //El valor se obtiene de (userGuess.value)
    inputNum = userGuess.value
    
    // Validar entrada
    
    if (inputNum < 1 || inputNum > 100){
        messageElement.textContent = `EL NUMERO INGRESADO, ESTA FUERA DE RANGO`;
    };
    
    // Incrementar intentos
    
    attemptsElement.textContent = contIntentos++; //Incremento en el dom


    
    // Comprobar resultado
    
        // Acierto

        if(inputNum == numAdivinar){
            messageElement.textContent = `¡Felicidades! Has adivinado el número ${numAdivinar} en ${contIntentos} intentos.`;
            messageElement.className = 'message correct';   
        };
    
    
        // Número demasiado alto
        if(inputNum > numAdivinar ){
            attemptsElement.textContent = contIntentos;
            messageElement.textContent = `El número ${inputNum} es MAYOR que el número secreto.`;
            messageElement.className = 'message higher';
            userGuess.value = '';

        };
    
        // Número demasiado bajo
        if(inputNum < numAdivinar ){
            attemptsElement.textContent = contIntentos;
            messageElement.textContent = `El número ${inputNum} es MENOR que el número secreto.`;
            messageElement.className = 'message lower';
            userGuess.value = '';
        };

    
    
    // Limpiar input y enfocar
    userGuess.value = '';
    userGuess.focus();
}