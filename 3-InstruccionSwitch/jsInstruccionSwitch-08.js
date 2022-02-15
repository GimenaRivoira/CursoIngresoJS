/* 
Gimena Rivoira
Ejercicio 8 - InstroduccionSwitch
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino 
*/
function mostrar()
{
	let destino;
	destino = document.getElementById('txtIdDestino').value;

	switch (destino) {
		case "Bariloche":
			alert("Hace FRIO")
			break;

		case "Cataratas":
			alert("Hace CALOR")
			break;
		case "Mar del plata":
			alert("Hace CALOR")
			break;	
		case "Ushuaia":
			alert("Hace FRIO")
			break;	
	}
}