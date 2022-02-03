/*
Gimena Rivoira
e/s - 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
  let firstNumber;
  let secondNumber;
  let result;

  firstNumber = document.getElementById("txtIdNumeroUno").value;
  secondNumber = document.getElementById("txtIdNumeroDos").value;

  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  result = firstNumber + secondNumber;
  alert("El resultado es: " + result);
}

function restar() {
  let firstNumber;
  let secondNumber;
  let result;

  firstNumber = document.getElementById("txtIdNumeroUno").value;
  secondNumber = document.getElementById("txtIdNumeroDos").value;

  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  result = firstNumber - secondNumber;
  alert("El resultado es:  " + result);
}

function multiplicar() {
  let firstNumber;
  let secondNumber;
  let result;

  firstNumber = document.getElementById("txtIdNumeroUno").value;
  secondNumber = document.getElementById("txtIdNumeroDos").value;

  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  result = firstNumber * secondNumber;
  alert("El resultado es: " + result);
}

function dividir() {
  let firstNumber;
  let secondNumber;
  let result;

  firstNumber = document.getElementById("txtIdNumeroUno").value;
  secondNumber = document.getElementById("txtIdNumeroDos").value;

  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  result = firstNumber / secondNumber;
  alert("El resultado es: " + result);
}
