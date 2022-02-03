/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
/* 	//EJERCICIO 10
	let number;
	let result;
	let porcent;

	number = document.getElementById("txtIdImporte").value
	number=parseInt(number)

	let finalResult = 100 / 25

	result = number / finalResult
	document.getElementById("txtIdResultado").value = result */

	
//	EJERCICIO 10 BIS 
	let number;
	let result;
	let porcent;

	number = document.getElementById("txtIdImporte").value
	number=parseInt(number)

	porcent = prompt("Ingrese el descuento: ")

	let finalResult = 100 / porcent

	result = number / finalResult
	document.getElementById("txtIdResultado").value = result
}
