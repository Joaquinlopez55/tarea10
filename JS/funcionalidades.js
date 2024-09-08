alert("Hola somos KINEFIT")

console.log ("------------------------")

let elementoTitulo = document.querySelector ("#titulo")

function cambiarTexto (texto)
{
    elementoTitulo.innerHTML = texto
}

elementoTitulo.addEventListener ("click", ()=> {
    cambiarTexto ("Hola somos kinefit, Gracias por visitarnos")
}
)
console.log ("------------------------")

function encontrarMayor(num1, num2, num3, num4) {
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num4 > mayor) {
        mayor = num4;
    }

    return mayor;
}

const mayor = encontrarMayor(15, 73, 98, 7);
console.log("El numero mayor es:", mayor);

console.log ("------------------------")

function encontrarMenor (num1, num2, num3) {
let menor = num1;

if (num2< menor){
    menor = num2;
}
if (num3 < menor){
    menor= num3;
}

return menor;
}

const menor = encontrarMenor (155, 125, 10);
console.log ("El numero menor es:", menor)

console.log ("------------------------")

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " es par.";
    } else {
        return numero + " es impar.";
    }
}

console.log(esParOImpar(16));
console.log(esParOImpar(555));