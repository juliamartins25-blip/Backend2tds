//Cauculadora de IMC
let nome = "Clara";
let peso = 65;
let altura = 1.68;

// função que declara e retorna o imc
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    return imc
};

let resultado = calcularIMC(peso, altura);
console.log(`IMC de ${nome}: ${resultado}.`);