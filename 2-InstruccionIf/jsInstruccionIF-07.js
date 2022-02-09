/* 
Gimena Rivoira
Ejercicio 7 - jsInstroduccionIF
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero. 
*/
function mostrar()
{
	let age;
	let status;
	status = document.getElementById('estadoCivil').value;
	age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);

	if (age < 19 && status == 'Soltero') {
		alert('Es muy pequeño para NO ser soltero')
	}	
}