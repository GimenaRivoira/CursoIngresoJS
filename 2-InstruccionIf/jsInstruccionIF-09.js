/* 
Gimena Rivoira
ejercicio 9 - jsIntroduccionIF
Al presionar el Boton, mostrar un numero Random del 1 al 10 inclusive 
*/
function mostrar()
{
	let randomNumber;
	randomNumber = Math.floor(Math.random() * 11) + 1
	console.log(randomNumber);
	alert(randomNumber);	
}
mostrar()