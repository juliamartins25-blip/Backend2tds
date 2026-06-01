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

const total = preco * quantidade;
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
console.log(`Com o desconto o valor total da compra seria R$${valorDaCompra}, e sobraria R$${troco} de troco.`);

// 4. Declare estoque e preço e exiba se o produto entra em promoção, se está em falta e se presisa de reposição de produto.

function verificaSePodutoEstaEmPromoção(){
    if (estaEmPromocao === false){
        console.log(`O produto não estava em promoção, e seu estoque era de ${estoqueDoTenis} unidades.`);
    } else if (estaEmPromocao === true){
        console.log(`O produto entrou em promoção e o estoque ficou em ${estoqueDoTenis}.`);
    };
};

function verificaSeTenisEstaEmFalta(){
    if (estoqueDoTenis === 0){
        estaEmFalta = true;
    } else if (estoqueDoTenis > 0){
        estaEmFalta = false;
    };

    if (estaEmFalta){
        console.log(`O produto precisa de reposição de estoque, pois está em falta.`);
    };
};

let estoqueDoTenis = 100;
let estaEmPromocao = false;
let estaEmFalta;

console.log(`\nEm uma loja o produto ${produto} custava R$${preco}.`);
verificaSePodutoEstaEmPromoção();

estaEmPromocao = true;
estoqueDoTenis = 0;

verificaSePodutoEstaEmPromoção();

verificaSeTenisEstaEmFalta();

// De acordo com as variáveis lançadas e daclaradas, quais ou qual processo pode ser alterado para uma função?