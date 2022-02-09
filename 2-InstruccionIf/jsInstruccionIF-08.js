/* 
Gimena Rivoira
Ejercicio 8 - jsIntroduccionIf
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: Es soltero y no es menor. 
*/
function mostrar()
{
	let age;
	let status;
	status = document.getElementById('estadoCivil').value;
	age = document.getElementById("txtIdEdad").value;
	age = parseInt(age);

	if (age > 17 && status == 'Soltero' ) {
		alert('Es soltero y no es menor')
	}

}//FIN DE LA FUNCIÓN