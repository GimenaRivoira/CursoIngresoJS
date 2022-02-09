/* 
Gimena Rivoira
Ejercicio 6 - jsIntroduccionIF
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años). 
*/

function mostrar() {
  let age;
  age = document.getElementById("txtIdEdad").value;
  age = parseInt(age);

  /* MAL DESARROLLADO
    if(edadIngresada>17){
	  alert("mayor");
	}
	if(edadIngresada>12 && edadIngresada<18){
	  alert("adolescente");
	}
	if(edadIngresada<13){
	  alert("menor");
	} 
	*/

  if (age > 17) {
    alert("Usted es un mayor de edad");
  } else {
    if (age < 12) {
      alert("Usted es un niño");
    } else {
      alert("Usted es un adolescente");
    }
  }
} //FIN DE LA FUNCIÓN
