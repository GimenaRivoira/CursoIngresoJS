/* 
Gimena Rivoira
Ejercicio 2 - jsInstroduccionIF
Al ingresar una edad debemos informar solo si la persona es mayor de edad 
*/
function mostrar()
{
	let age;
	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	if (age > 17) {
		alert('Usted es mayor de edad');
	}

}//FIN DE LA FUNCIÓN