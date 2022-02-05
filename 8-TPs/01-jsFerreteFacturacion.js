/*
Gimena Rivoira
TP: 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let firstPrice = document.getElementById('txtIdPrecioUno').value;
    let secondPrice = document.getElementById('txtIdPrecioDos').value;
    let thridPrice = document.getElementById('txtIdPrecioTres').value;

    firstPrice = parseInt(firstPrice)
    secondPrice = parseInt(secondPrice)
    thridPrice = parseInt(thridPrice)

    let sum = firstPrice + secondPrice + thridPrice;

    alert('Su suma total es: ' + sum)
}
function Promedio () 
{
    let firstPrice = document.getElementById('txtIdPrecioUno').value;
    let secondPrice = document.getElementById('txtIdPrecioDos').value;
    let thridPrice = document.getElementById('txtIdPrecioTres').value;

    firstPrice = parseInt(firstPrice)
    secondPrice = parseInt(secondPrice)
    thridPrice = parseInt(thridPrice)

    let sum = firstPrice + secondPrice + thridPrice;
    let result = sum / 3

    alert('Su promedio total es: ' + result)
}
function PrecioFinal () 
{
    let firstPrice = document.getElementById('txtIdPrecioUno').value;
    let secondPrice = document.getElementById('txtIdPrecioDos').value;
    let thridPrice = document.getElementById('txtIdPrecioTres').value;

    firstPrice = parseInt(firstPrice)
    secondPrice = parseInt(secondPrice)
    thridPrice = parseInt(thridPrice)

    let sum = firstPrice + secondPrice + thridPrice;
    let result = sum * 1.21

    alert('Su suma total es: ' + result)
}