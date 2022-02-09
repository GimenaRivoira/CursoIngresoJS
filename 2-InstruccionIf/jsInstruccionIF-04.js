/* 
Gimena Rivoira
Ejercicio 4 - jsIntroduccionIF
Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) . 
*/

function mostrar()
{
	let age;
	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	if (age > 12) {
		if (age < 18) {
			alert('Usted es un adolescente');
		}
	}

}//FIN DE LA FUNCIÓN