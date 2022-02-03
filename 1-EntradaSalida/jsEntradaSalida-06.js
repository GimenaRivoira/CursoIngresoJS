/*
Gimena Rivoira
e/s - 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let firstNumber;
	let secondNumber;
	let sum;
	firstNumber = document.getElementById('txtIdNumeroUno').value;
	secondNumber = document.getElementById('txtIdNumeroDos').value;
	firstNumber = parseInt(firstNumber);
	secondNumber = parseInt(secondNumber);
	sum = firstNumber + secondNumber;
	alert("El resultado es: " + sum);
}

