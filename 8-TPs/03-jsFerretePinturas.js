/*
Gimena Rivoira
TP - 3 
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
`
*/
function FahrenheitCentigrados () 
{
	let temperature = document.getElementById('txtIdTemperatura').value;
    temperature = parseInt(temperature);

    let result = temperature - 32
    let centigrade = (result * 5) / 9

    alert(`${temperature} Fahrenheit son ${centigrade.toFixed(2)} centígrados`) 
}

function CentigradosFahrenheit () 
{
    let temperature = document.getElementById('txtIdTemperatura').value;
    temperature = parseInt(temperature);

    let fahrenheit = (temperature *1.8) + 32

    alert(`${temperature} Fahrenheit son ${fahrenheit.toFixed(2)} centígrados`) 
}
