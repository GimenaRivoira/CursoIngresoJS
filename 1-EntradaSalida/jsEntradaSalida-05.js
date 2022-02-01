/*
Gimena Rivoira
e/s - 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let showName;
	let showAge;
	showName = document.getElementById("txtIdNombre").value;
	showAge = document.getElementById("txtIdEdad").value;
	alert(`Usted se llama ${showName} y tiene ${showAge} años`);
}

