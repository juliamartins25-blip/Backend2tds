// 1. VERDE: declarar 5 variáveis para rpresentar um produto.
// 2. Crie duas variáveis numéricas e exiba uma subtração.
// Fazer uma saída de froma interpolada.

const nomeDoProduto = "bola";
const categoriaDoProduto = "brinquedos";
let precoDoProduto = 20;
let desconto = 5;
const nomeDaLoja = "Maringá";
const resultado = precoDoProduto - desconto;

console.log(`O produto ${nomeDoProduto}, da categoria ${categoriaDoProduto}, custa ${precoDoProduto} reais, na loja ${nomeDaLoja}.`);
console.log(`O comprador recebeu um desconto de ${desconto} reais.`);
console.log(`O preço final da compra foi ${resultado} reais.`);

// 3. Declarar preço e quantidade. Calcular o valor total, o valor com 20% de desconto, quantos produtos inteiros se compra com R$ 500,00 e quanto sobra de troco.

const produto = "tenis";
const preco = 100;
let quantidade = 3;

const total = produto * quantidade;
const desconto = 20 / 100;
const valoDoDesconto = preco * desconto;
const totalComDesconto = preco - valoDoDesconto;

console.log(`O produto ${produto} custa R$${preco}.`);
console.log(`Um cliente comprou ${quantidade} unidades do produto, totalizando R$${total}.`);
console.log(`A loja estava com uma promoção: compre três produtos e guanhe um desconto de ${desconto * 100}%`);