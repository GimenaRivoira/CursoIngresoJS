/* 
Gimena Rivoira
e/s - 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let showName;
	showName = prompt('Por favor, ingrese su nombre');
	document.getElementById('txtIdNombre').value = showName;
}

