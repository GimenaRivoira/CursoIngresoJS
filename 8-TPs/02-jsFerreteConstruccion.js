/*
Gimena Rivoira
TP: 2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let wire = 3;
  let height = document.getElementById("txtIdLargo").value;
  let width = document.getElementById("txtIdAncho").value;

  height = parseInt(height);
  width = parseInt(width);

  let perimeter = (width + height) * 2;
  let result = wire * perimeter;

  alert("Para el perimetro rectangular se necesitan " + result);
}

function Circulo() {
  let radius = document.getElementById("txtIdRadio").value;
  radius = parseInt(radius);

  let wire = (2 * radius * 3.14) * 3;

  alert("La cantidad a comprar es: " + wire);
}

function Materiales() {
    let width = document.getElementById('txtIdAncho').value;
    let height = document.getElementById('txtIdLargo').value;

    width = parseInt(width)
    height = parseInt(height)

    let sum = width * height

    let bagCement = sum * 2
    let bagCal = sum * 3

    alert(`Para un terreno de ${sum} metros cuadrados, se necesitan ${bagCal} bolsas de cal y ${bagCement} bolsas de cemento`)
}
