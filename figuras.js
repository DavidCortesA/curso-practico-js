//Codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

// const areaCuadrada = ladoCuadrado * ladoCuadrado;

// console.log("El área del cuadrado miden: " + areaCuadrada + "cm");

function areaCuadrado(lado){
    return lado * lado;
}


console.groupEnd();
//Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(`Los lados del triangulo miden ${ladoTriangulo1 } cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm.`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo es de ${alturaTriangulo} cm`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

// console.log(`El perimetro del triangulo es de ${perimetroTriangulo} cm`);

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log(`El área del triangulo es de ${areaTriangulo} cm2`);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

console.group("Circulos");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI;

// const perimetroCirculo = diametroCirculo * PI;

// const areaCirculo = (radioCirculo * radioCirculo) * PI;

// console.log(`El radio del ciruclo es ${radioCirculo} cm`);
// console.log(`El diametro del ciruclo es ${diametroCirculo} cm`);
// console.log(`PI: ${PI}`);
// console.log(`El perimetro del ciruclo es ${perimetroCirculo} cm`);
// console.log(`El área del ciruclo es ${areaCirculo} cm2`);

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;   
}

console.groupEnd();

//Funciones con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("Cuadrado");
    const value = input.value;
    

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("Cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
