function infuno(){
let num1 =parseInt(document.getElementById('num1').value);
let num2 =parseInt(document.getElementById('num2').value);
var sum = (num1 + num2);
var resta = (num1 - num2);
var multi = (num1 * num2);
var divi = (num1 / num2);

document.getElementById('resultado de la suma de los numeros es :').innerHTML = sum
document.getElementById('resultado de la resta de los numeros es :').innerHTML = resta
document.getElementById('resultado de la multiplicacion de los numeros es :').innerHTML= multi
document.getElementById('resultado de la division de los numeros es :').innerHTML = divi	
}

function infdos(){
	var dato, dato2;
var radio;

dato = window.prompt("Introduce el radio del circulo");
radio = parseFloat(dato);


area =  3.14 * Math.pow(radio, 2);
console.log("El area del circulo es de: " + area);

perimetro = 2 * 3.14 * radio;
console.log("EL perimetro del circulo es de:  " + perimetro);
}

function inftres(){
	var lado1, lado2, lado3, l1, l2 ,l3;
var base, altura;
var dato1, dato2;

dato1 = window.prompt("Introduce la base del triangulo");
base = parseInt(dato1);
dato2 = window.prompt("Introduce la altura del triangulo");
altura =  parseInt(dato2);

l1 = window.prompt("Introduce el lado1 del triangulo");
lado1 = parseFloat(l1);
l2 = window.prompt("Introduce el lado2 del triangulo");
lado2 = parseFloat(l2);
l3 = window.prompt("Introduce el lado3 del triangulo");
lado3 = parseFloat(l3);

var area = (base * altura) / 2;
var perimetro = lado1 + lado2 + lado3;

console.log("El area del triangulo es de: " + area);
console.log("El perimetro del triangulo es de: " + perimetro);
}

function infcuatro(){
	var anio, dato;

dato = window.prompt("Introduce el año que naciste");
anio = parseInt(dato);

var resultado = 2022 - anio;
console.log("Tu edad segun tu año es de: " + resultado);
}

function infcinco(){
var num1, num2, dato1, dato2;

dato1 = window.prompt("Introduce el primer numero ");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce el segundo numero ");
num2 = parseInt(dato2);

if(num1 > num2){
    var resultado = "El primer numero es mayor";
} else{
    var resultado = "El segundo numero es mayor";
} if(num1 == num2){
    var resultado = "Son iguales";
}

alert(resultado);
}
function infseis(){
var lado1, lado2, lado3;
var dato1, dato2, dato3;
var resultado;

dato1 = window.prompt("Introduce el lado 1:");
lado1 = parseInt(dato1);

dato2 = window.prompt("Introduce el lado 2:");
lado2 = parseInt(dato2);

dato3 = window.prompt("Introduce el lado 3: ");
lado3 = parseInt(dato3);

if(lado1 == lado2 && lado2 == lado3){
    resultado = "Equilatero"
} else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    resultado = "Isosceles"
} else{
    resultado = "Escaleno"
}

alert(resultado);	
}
function infsiete(){
	var num, dato;
var resultado;

dato = window.prompt("Introduce un numero");
num = parseInt(dato);

if(num%2==0){
    resultado = "El numero que ingreso es par";
}else{
    resultado = "El numero que ingreso es impar";
}

alert(resultado);
}
function infocho(){
	var dato, edad;
var resultado;

dato = window.prompt("Introduce tu edad");
edad = parseInt(dato);

if(edad > 17){
    resultado = "Eres Mayor de edad";
}else{
    resultado = "Eres menor de edad";
}

alert(resultado);
}
function infonueve(){
	var dato, sueldo;
var horasWork;

dato = window.prompt("Introduce el pago por hora del empleado", "000");
sueldo = parseInt(dato);

horasWork = sueldo * 8;
sueldoNeto = horasWork * 6; 

console.log("El sueldo por horas es de: " + horasWork);
console.log("El sueldo del empleado es de: " + sueldoNeto);

 if(sueldoNeto > 2000){
     alert("Paga tus impuestos")
 }else if(sueldoNeto <= 2000){
     alert("No pagas impuestos")
 }
}

function infodiez(){
	let num1, num2;
let dato1, dato2;

dato1 = window.prompt("Introduce el primer numero");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce el segundo numero");
num2 = parseInt(dato2);

if(num1 > num2){
    var resultado = num1 + num2;
    alert("El resultado de la suma de los numeros es de:" + resultado);
    var resultado2 = num1 - num2;
    alert("El resultado de la resta de los numeros es de: " + resultado2)
}else{
    var resultado = num1 * num2;
    alert("El resultado de la multiplicacion de los numeros es de: " + resultado);
    var resultado2 = num1 / num2;
     alert("El resultado de la division de los numeros es de: " + resultado2);
}}

function infonce(){
	let calif;
let suma = 0;
let suma2 = 0;

for(c = 1; c <= 6; c++){
    alert(` Materia ${c} `)
    for(i = 1; i <= 3; i++){
        dato = prompt(`Parcial ${i}`);
        calif = parseInt(dato);
        suma = suma + calif;
    }
    let resultado = suma / 3;
    suma = 0;
    alert(`El promedio de la materia es de: ${resultado}`);
    suma2 = suma2 + resultado;
    resultado = 0;
}
let resultado2 = suma2 / 6;
if(resultado2 >= 8){
    alert("Esta aprobado");
}else if(resultado2 < 7){
    alert("Estas reprobado")
}

}
function infodoce(){
	let num, dato;
let valor = 0;

for(c = 0; c <= 10; c++){
    dato = prompt(`Introducir el Valor ${c}`);
    num = parseInt(dato);
    valor = valor + num;
}
let resultado = valor / 10;
alert(`La suma de los valores es de: ${valor}`);
alert(`El promedio de los valores es de: ${resultado}`);


}
function infotrece(){
	let  num;
let  dato;
dato = prompt("Introduzca el numero de piezas: ");
num = parseInt(dato);

for(c = 1; c <= num; c++){
    let tamPiezas, dato2;
    dato2 = prompt("Cual es el tamaño de la pieza");
    tamPiezas = parseFloat(dato2);

    if(tamPiezas >= 1.20 && tamPiezas <= 1.30){
        contAptas = 0;
        contAptas ++;
    }
}

alert(`La cantidad de piezas Aptas fue de: ${contAptas}`);

}
function infocatorce (){
	let dato, calf;
let cont1 = 0, cont2 = 0, acum = 0, promedio = 0;

for(c = 1; c <= 10; c++){
    dato = prompt(`Introduzca la Nota Numero${c}`);
    calf = parseInt(dato);
    console.log(cont1);
    if(calf >= 8){
        cont1=cont1+1;
    } if(calf < 8){
        cont2 = cont2 + 1;
    }
    acum = acum + calf;
}

promedio = acum / 10;
alert(`El promedio general fue de ${promedio}`);
alert(`Numero de alumnos con notas mayores o iguales a 8 ${cont1}`);
alert(`Numero de alumnos con notas menores a 8 ${cont2}`);

}

function infoquince (){
	let empleados = 0;
let sueldo = 0;
let cont1 = 0;
let cont2 = 0;
let acum = 0;

let dato = prompt("Ingrese el numero de empleados: ");
empleados = parseInt(dato);

for (c = 1; c <= empleados; c++) {
    let dato2 = prompt("Ingresar el sueldo del empleado: ");
    sueldo = parseFloat(dato2);

    if(sueldo >= 1000 && sueldo <= 3000){
        cont1 = cont1 + 1;
    }else if(sueldo > 3000){
        cont2 = cont2 + 1;
    }
    acum = acum + sueldo;
}

alert(`los empleados que cobran entre $1000 y $3000 son: ${cont1}`);
alert(`los empleados que cobran mas de 3000 son: ${cont2}`);
alert(`El importe total fue de: ${acum}`);
}

function infodieciseis(){
	var resultado;

for (c = 1; c <=20; c++) {
    let cuadrado = Math.pow(c, 2);
    console.log(`el cuadrado del primer numero fue ${cuadrado}`);
    if(cuadrado%2==0){
        resultado = "El numero es par";
        alert(resultado);
    }else{
        resultado = "El numero es impar";
        alert(resultado);
    }
}

}

function infdiecisiete(){
	for(c = 1; c <= 10; c++){
    for(j = 1; j <= 10; j++){
        let resultado = alert(`${c} * ${j} = ${c*j}`);
    }
}
}
function infoveintiseis(){
dato = prompt("Ingresa el numero del mes: ");
num = parseInt(dato);

switch(num){
    case 1:
        alert("Enero");
    break; 

    case 2:
        alert("Febrero");
    break; 

    case 3:
        alert("Marzo");
    break;

    case 4:
        alert("Abril");
    break; 

    case 5:
        alert("Mayo");
    break; 

    case 6:
        alert("Junio");
    break; 

    case 7:
        alert("Julio");
    break; 

    case 8:
        alert("Agosto");
    break; 

    case 9:
        alert("Septiembre");
    break; 

    case 10:
        alert("Octubre");
    break; 

    case 11:
        alert("Noviembre");
    break; 

    case 12:
        alert("Diciembre");
    break; 
    
}

if(num > 12){
    let resultado = "El mes no existe"
    alert(resultado);
}
}
function infoveintisiete(){
let dato, num;
let resultado;
let precioFinal;
dato = prompt("Introduzca el precio de la prenda");
num = parseFloat(dato);

if(num > 2500){
    resultado = (num * 0.15);
    alert(`Descuento del 15%: ${resultado}`);
    precioFinal = (num - resultado);
    alert(`El precio Final es de: ${precioFinal}`);

}else{
    resultado = (num * 0.08);
    alert(`Descuento del 8%: ${resultado}`);
    precioFinal = (num - resultado);
    alert(`El precio Final es de: ${precioFinal}`);
}
}
function infoveintiocho(){
let dato, num;
alert("El precio por persona es de $95");
alert("De 200 a 300 personas el costo es de $85");
alert("Para mas de 300 personas el costo es de $75");

dato = prompt("Introduzca el numero de personas que asistirar a su evento");
num = parseInt(dato);

if(num > 200 && num <=300){
    let resultado =  num * 85;
    alert(`El presupuesto es de: ${resultado}`);
}else if(num > 300){
    let resultado = num * 75;
    alert(`El presupuesto es de: ${resultado}`);
}else if(num <=200){
    let resultado = num * 95;
    alert(`El presupuesto es de: ${resultado}`);
}	
}
function infoveintinueve(){
let dato, materiaPrima;
let dato2, clave;
let manoObra;
let gastoFabricacion;
let costoProduccion;
let resultado;
let precioVenta;

dato = prompt("INGRESE LA MATERIA PRIMA");
materiaPrima = parseInt(dato);
dato2 = prompt("INGRESE LA CLAVE DEL PRODUCTO");
clave = parseInt(dato2);

switch(clave){
    case 1:
        manoObra = (materiaPrima) * .80;
        alert(`El costo de la mano de obra es de ${manoObra}`);
        gastoFabricacion = (materiaPrima) * .28;
        alert(`El gasto de fabricacion es de: ${gastoFabricacion}`);
        costoProduccion = (materiaPrima) + (manoObra) + (gastoFabricacion);
       	alert(`El costo de produccion fue de: ${costoProduccion}`);
        resultado = (costoProduccion) * .45;
        precioVenta = (costoProduccion) + (resultado);
        alert(`EL Precio de la venta fue de: ${precioVenta}`);
    break; 

    case 2:
        manoObra = (materiaPrima) * .85;
        alert(`El costo de la mano de obra es de ${manoObra}`);
        gastoFabricacion = (materiaPrima) * .30;
        alert(`El gasto de fabricacion es de: ${gastoFabricacion}`);
        costoProduccion = (materiaPrima) + (manoObra) + (gastoFabricacion);
        alert(`El costo de produccion fue de: ${costoProduccion}`);
        resultado = (costoProduccion) * .45;
        precioVenta = (costoProduccion) + (resultado);
        alert(`EL Precio de la venta fue de: ${precioVenta}`);
    break; 

    case 3:
        manoObra = (materiaPrima) * .75;
        alert(`El costo de la mano de obra es de ${manoObra}`);
        gastoFabricacion = (materiaPrima) * .35;
        alert(`El gasto de fabricacion es de: ${gastoFabricacion}`);
        costoProduccion = (materiaPrima) + (manoObra) + (gastoFabricacion);
        alert(`El costo de produccion fue de: ${costoProduccion}`);
        resultado = (costoProduccion) * .45;
        precioVenta = (costoProduccion) + (resultado);
        alert(`EL Precio de la venta fue de: ${precioVenta}`);
    break;

    case 4:
        manoObra = (materiaPrima) * .75;
        alert(`El costo de la mano de obra es de ${manoObra}`);
        gastoFabricacion = (materiaPrima) * .28;
        alert(`El gasto de fabricacion es de: ${gastoFabricacion}`);
        costoProduccion = (materiaPrima) + (manoObra) + (gastoFabricacion);
        alert(`El costo de produccion fue de: ${costoProduccion}`);
        resultado = (costoProduccion) * .45;
        precioVenta = (costoProduccion) + (resultado);
        console.log(`EL Precio de la venta fue de: ${precioVenta}`);
    break; 

    case 5:
        manoObra = (materiaPrima) * .80;
        alert(`El costo de la mano de obra es de ${manoObra}`);
        gastoFabricacion = (materiaPrima) * .30;
        alert(`El gasto de fabricacion es de: ${gastoFabricacion}`);
        costoProduccion = (materiaPrima) + (manoObra) + (gastoFabricacion);
        alert(`El costo de produccion fue de: ${costoProduccion}`);
        resultado = (costoProduccion) * .45;
        precioVenta = (costoProduccion) + (resultado);
        alert(`EL Precio de la venta fue de: ${precioVenta}`);
    break; 

    case 6:
        manoObra = (materiaPrima) * .85;
        alert(`El costo de la mano de obra es de ${manoObra}`);
        gastoFabricacion = (materiaPrima) * .35;
        alert(`El gasto de fabricacion es de: ${gastoFabricacion}`);
        costoProduccion = (materiaPrima) + (manoObra) + (gastoFabricacion);
        alert(`El costo de produccion fue de: ${costoProduccion}`);
        resultado = (costoProduccion) * .45;
        precioVenta = (costoProduccion) + (resultado);
        alert(`EL Precio de la venta fue de: ${precioVenta}`);
    break; 
}
}
function infotreinta(){
	let dato, pespPaquete;
let dato2, claveZona;
let costoGramo;
let resultado;

dato = prompt("INTRODUZCA EL PESO DEL PAQUETE");
pesoPaquete = parseFloat(dato);

if(pesoPaquete >= 5){
    alert("EL PAQUETE NO CUMPLE CON LAS NORMAS")
}else{
    dato2 = prompt("INTRODUZCA LA CLAVE DE LA ZONA");
    claveZona = parseInt(dato2);

    switch(claveZona){
        case 1:
            costoGramo = (pesoPaquete * 1000) * 11.00;
            alert(`El costo del envio es de: ${costoGramo}`);
        break;

        case 2:
            costoGramo = (pesoPaquete * 1000) * 10.00;
            alert(`El costo del envio es de: ${costoGramo}`);
        break;

        case 3:
            costoGramo = (pesoPaquete * 1000) * 12.00;
            alert(`El costo del envio es de: ${costoGramo}`);
        break;

        case 4:
            costoGramo = (pesoPaquete * 1000) * 24.00;
            alert(`El costo del envio es de: ${costoGramo}`);
        break;

        case 5:
            costoGramo = (pesoPaquete * 1000) * 27.00;
            alert(`El costo del envio es de: ${costoGramo}`);
        break;
    }
}
}
function infotreintaidos(){
	let entradas;
let sector;
let dato1, dato2;
let resultado;


dato1 = prompt("INTRODUZCA EL NUMERO DE ENTRADAS: ");
entradas = parseInt(dato1);
alert("SECTOR 1: Sol Candente = $3");
alert("SECTOR 2: Sol luminoso = $5");
alert("SECTOR 3: Sombrita = $8");
alert("SECTOR 4: Tribunita = $15");
alert("SECTOR 5: Silla plastica = $20");

if(entradas > 1){
    dato2 = prompt("INTRODUZCA EL SECTOR DEL ESTADIO:")
    sector = parseInt(dato2);

    switch(sector){
        case 1:
            resultado = (entradas * 3);
            alert(`EL TOTAL A PAGAR EN EL SECTOR 1 ES: ${resultado}`);
        break;

        case 2:
            resultado = (entradas * 5);
            alert(`EL TOTAL A PAGAR EN EL SECTOR 2 ES: ${resultado}`);
        break;

        case 3:
            resultado = (entradas * 8);
            alert(`EL TOTAL A PAGAR EN EL SECTOR 3 ES: ${resultado}`);
        break;

        case 4:
            resultado = (entradas * 15);
            alert(`EL TOTAL A PAGAR EN EL SECTOR 4 ES: ${resultado}`);
        break;

        case 5:
            resultado = (entradas * 20);
            alert(`EL TOTAL A PAGAR EN EL SECTOR 5 ES: ${resultado}`);
        break;
    }
}
}
function infotreintaitres(){
	let ingresa;
let dato;
let suma = 0;

for(c = 1; c <= 10; c++){
    dato = prompt("INGRESA EL NUMERO DE DATOS: ");
    ingresa = parseInt(dato);
    
    if(ingresa > 0){
        suma = suma + ingresa;

    }else if (ingresa < 0){
        alert("EL NUMERO ES NEGATIVO");
    }
}
}
