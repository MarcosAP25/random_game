// Variables globales



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
    
    
    
    
    // Actualizar interfaz
    attemptsElement.textContent = attempts;
    messageElement.textContent = '';
    messageElement.className = 'message';
    userGuess.value = '';
    userGuess.focus();
    
    console.log('Nuevo juego iniciado. Número secreto:', randomNumber);
}

/**
 * Comprueba el intento del usuario
 */
function checkGuess() {
    // Validar que el juego esté activo
  
    // Obtener el valor ingresado por el usuario
    //El valor se obtiene de (userGuess.value)
    
    
    // Validar entrada
    
    
    // Incrementar intentos
    
    attemptsElement.textContent = attempts; //Incremento en el dom
    
    // Comprobar resultado
    
        // Acierto
        messageElement.textContent = `¡Felicidades! Has adivinado el número ${randomNumber} en ${attempts} intentos.`;
        messageElement.className = 'message correct';
    
    
        // Número demasiado alto
        messageElement.textContent = `El número ${guess} es MAYOR que el número secreto.`;
        messageElement.className = 'message higher';
    
        // Número demasiado bajo
        messageElement.textContent = `El número ${guess} es MENOR que el número secreto.`;
        messageElement.className = 'message lower';
    
    
    // Limpiar input y enfocar
    userGuess.value = '';
    userGuess.focus();
}