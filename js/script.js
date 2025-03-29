//Introduce un número del 1 al 3 en el campo de entrada.
//El juego se iniciará automáticamente con una cuenta atrás de 5 segundos.
//Después de la cuenta atrás, el juego evaluará el número introducido
//Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.

const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');
let timer;

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function startGame() {
  const randomNum = getRandomInt(3);
  const userNum = parseInt(userInput.value);
  if (!userNum || userNum < 1 || userNum > 3) {
    result.textContent = "Por favor, introduce un número válido entre 1 y 3.";
    return;
  }

  let counter = 5;
  countdown.textContent = counter;

  timer = setInterval(() => {
    counter--;
    countdown.textContent = counter;

    if (counter === 0) {
      clearInterval(timer);
      evaluateResult(userNum, randomNum);
    }
  }, 1000);
}

function evaluateResult(userNum, randomNum) {
  if (userNum === randomNum) {
    result.textContent = `¡Has salvado el mundo! Tu número: ${userNum}, Número correcto: ${randomNum}`;
  } else {
    result.textContent = `La bomba ha estallado. Tu número: ${userNum}, Número correcto: ${randomNum}`;
  }
}

function restartGame() {
  clearInterval(timer);
  countdown.textContent = "";
  result.textContent = "";
  userInput.value = "";
}

userInput.addEventListener('blur', startGame);
restartButton.addEventListener('click', restartGame);