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
const descontoDoTenis = (20 / 100);
const valorDoDesconto = preco * descontoDoTenis;
const totalComDesconto = preco - valorDoDesconto;

console.log(`\nO produto ${produto} custa R$${preco}.`);
console.log(`Um cliente comprou ${quantidade} unidades do produto, totalizando R$${total}.`);
console.log(`A loja estava com uma promoção: compre três produtos e guanhe um desconto de ${descontoDoTenis * 100}%`);
console.log(`O valor total da compra com desconto é de R$${totalComDesconto}.`);

const dinheiro = 500;
const quantidadeDeProdutosCompraveis = dinheiro / preco;
quantidade = quantidadeDeProdutosCompraveis;

const quantidadeParaDesconto = 3 * preco;
const valorDaCompra = (dinheiro - quantidadeParaDesconto) + totalComDesconto;
const troco = dinheiro - valorDaCompra;

console.log(`Um cliente que levar R$${dinheiro}, conseguira comprar ${quantidade} produtos.`);
console.log(`Com o desconto o valor total da compra seria ${valorDaCompra}, e sobraria ${troco} de troco.`);