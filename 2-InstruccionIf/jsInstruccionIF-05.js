/* Gimena Rivoira
Ejercicio 5 - jsInstroduccionIF
Al ingresar una edad solo debemos informar si la persona NO es adolescente. */
function mostrar()
{
	let age;
	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	if (age < 12 || age > 17) {
		alert('Usted NO es un adolescente');
	}


}//FIN DE LA FUNCIÓN