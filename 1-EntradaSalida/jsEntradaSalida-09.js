/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let number;
	let result;
	let porcent;

	number = document.getElementById("txtIdSueldo").value
	number=parseInt(number)

	porcent = prompt("Ingrese su porcentaje: ")
	result = number * porcent /100
	document.getElementById("txtIdResultado").value = result

/* 	

EJERCICIO 9
    let number;
	let result;

	number = document.getElementById("txtIdSueldo").value
	number=parseInt(number)

	result = number * 10 /100
	document.getElementById("txtIdResultado").value = result */

	
}
