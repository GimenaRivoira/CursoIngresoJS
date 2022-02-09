/* 
Gimena Rivoira
ejercicio 10 - jsIntroduccionIF
Al presionar el Boton, asignar una nota RANDOM al examen y mostrar:
EXCELENTE para notas igual a 9 o 10,
APROBADO para notas mayores a 4,
Vamos, la proxima se puede. para notas menores a 4 
*/
function mostrar()
{
	let randomNumber;
	randomNumber = Math.floor(Math.random() * 11)

	if (randomNumber == 9 && randomNumber == 10) {
		alert(`Su nota es ${randomNumber} EXCELENTE`);
	} else if(randomNumber >= 4){
		alert(`Su nota es ${randomNumber} APROBO`);
	} else {
		alert(`Su nota es ${randomNumber} VAMOS, la proxima se puede`);
	}

}//FIN DE LA FUNCIÓN