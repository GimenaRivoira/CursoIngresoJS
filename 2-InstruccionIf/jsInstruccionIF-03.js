/* 
Gimena Rivoira
Ejercicio 3 - jsInstroduccionIF
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad. */
function mostrar()
{
	let age;
	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	if (age > 17) {
		alert('Usted es mayor de edad');
	} 
	if (age < 18) {
		alert('Usted es menor de edad');
	}

}//FIN DE LA FUNCIÓN