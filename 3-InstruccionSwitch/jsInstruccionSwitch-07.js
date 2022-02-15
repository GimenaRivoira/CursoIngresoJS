/* 
Gimena Rivoira
Ejercicio 7 - InstroduccionSwitch
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra:
Norte, Sur, Este u Oeste 
*/
function mostrar()
{
	let destino;
	destino = document.getElementById('txtIdDestino').value;

	switch (destino) {
		case "Bariloche":
			alert("Se ubica en el norte del pais")
			break;

		case "Cataratas":
			alert("Se ubica en el noreste del pais")
			break;
		case "Mar del plata":
			alert("Se ubica en el oeste del pais")
			break;	
		case "Ushuaia":
			alert("Se ubica en el sur del pais")
			break;	
	}

}//FIN DE LA FUNCIÓN