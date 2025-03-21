let valorIngresado = parseInt(prompt("Ingrese un valor para determinar si es par o impar: "));

document.write("El valor ingresado es " + valorIngresado + "<br>");

function determinarParImpar() {
    if (valorIngresado % 2 == 0) {
        document.write("El valor ingresado es par");
    } else if (isNaN(valorIngresado)) {
        document.write("El valor ingresado no es un número");
    } else {
        document.write("El valor ingresado es impar");
    }
}

determinarParImpar()

let arrayNumbers = [2,3,4,5,6,7];

for (let i = arrayNumbers[0]; i = arrayNumbers.length; i++) {
    document.write("<br>" + i)
}