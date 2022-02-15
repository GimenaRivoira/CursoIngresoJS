/*
Gimena Rivoira 
TP - 4 FERRETE ILUMINACION
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    let lamparas = 35;
    let cantidad;
    let marca;
    let lamparasFinales;
    let precioFinal;

    cantidad = document.getElementById('txtIdCantidad').value;
    cantidad = parseInt(cantidad)

    marca = document.getElementById('Marca').value;

    lamparasFinales = lamparas * cantidad;

    if(cantidad >= 6){
        let descuento = lamparasFinales * 50 / 100
        precioFinal = lamparasFinales - descuento 
        precioDescuento = precioFinal
        document.getElementById('txtIdprecioDescuento').value = precioFinal
    } else if(cantidad === 5 && marca == 'ArgentinaLuz' || cantidad === 5 && marca == 'FelipeLamparas'){
        let descuento = lamparasFinales * 25 / 100
        precioFinal = lamparasFinales - descuento 
        document.getElementById('txtIdprecioDescuento').value = precioFinal
    } else if (cantidad === 5 && marca !== 'ArgentinaLuz' || cantidad === 5 && marca !== 'FelipeLamparas'){
        let descuento = lamparasFinales * 20 / 100
        precioFinal = lamparasFinales - descuento 
        document.getElementById('txtIdprecioDescuento').value = precioFinal
    } else if (cantidad === 3 && marca === 'ArgentinaLuz'){
        let descuento = lamparasFinales * 15 / 100
        precioFinal = lamparasFinales - descuento 
        document.getElementById('txtIdprecioDescuento').value = precioFinal
    } else if (cantidad === 3 && marca === 'FelipeLamparas'){
        let descuento = lamparasFinales * 10 / 100
        precioFinal = lamparasFinales - descuento 
        document.getElementById('txtIdprecioDescuento').value = precioFinal
    } else if (cantidad === 3 && marca !== 'FelipeLamparas' || cantidad === 3 && marca !== 'ArgentinaLuz'){
        let descuento = lamparasFinales * 5 / 100
        precioFinal = lamparasFinales - descuento 
        document.getElementById('txtIdprecioDescuento').value = precioFinal
    } else if (cantidad < 3){
        document.getElementById('txtIdprecioDescuento').value = lamparasFinales
    }

    if(precioFinal > 120){
        let ingreso = lamparasFinales * 10 / 100
        precioFinal = lamparasFinales + ingreso 
        document.getElementById('txtIdprecioDescuento').value = `Usted pago ${precioFinal} de IIBB., siendo ${ingreso} el impuesto que se pagó.`
    }
}
