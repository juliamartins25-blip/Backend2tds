//1. Declare 5 variaveis para representar uma viagem (destino, nome do viajnte, cidade de origem, duração em dias e meio de transporte)
//2. Orgaiazar uma forma de imprimir esses valores com interpolação ou saída individual

const destino = "Foz do Iguaçu";
const nomeDoViajante = "Júlia";
const cidadeDeOrigem = "Curitiba";
let duracao = 8;
let transporte = "ônibus";

console.log(`${nomeDoViajante} vai viajar de ${cidadeDeOrigem} para ${destino}, de ${transporte}, que durará ${duracao} horas.`);

//3. crie duas variaveis numerica com o custo da passagem, hospedagem, e alimentação.
//4. exiba uma soma dos valores

const custoDaPassagem = 400;
const custoDaHospedagem = 600;
const custoDaAlimentação = 100;

let total = custoDaAlimentação + custoDaHospedagem + custoDaPassagem;

console.log(`O preço da passagem é R$${custoDaPassagem}, a diáia do hotel é R$${custoDaHospedagem}, e gastará R$${custoDaAlimentação} com alimentação.`);
console.log(`Ao todo ela gastará ${total} com a viagem.`);
