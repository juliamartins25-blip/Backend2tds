//SISTEMA DE GERENCIAMENTO DE PERSONAGEM

function calcularPontuacaoTotal(historicoDePontos){
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };

    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const VerificarStatusDaMissao = function(missao){
        const foiFinalizada =   missao.status === "concluida"; // === Igualdade ESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(VerificarStatusDaMissao);
    return apenasConcluidas;
};

function atualizarInventario(invetarioAtual, acao, nomeDoItem){
    let novoInventario;

    if (acao === "pegar"){
        const inventarioComItemNovo = [inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItemNovo;
    } else if (acao === "descartar") {
        const inventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem
    } else {
        novoInventario = invetarioAtual;
    }
    return novoInventario; // Retornar a mochila do jogador atualizada
};

const pontosDoJogador = [100, 50, 250, 10]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuação final: ", total);

const missoes = [
    {nome: "Salvar a aldeia", status: "concluida"},
    {nome: "Encontrar o mapa", status: "em andamento"},
    {nome: "Derrotar o chefão", status: "falhou"},
    {nome: "Coletar recursos", status: "concluida"}
];

const concluidas = filtrarMissoesConcluidas(missoes);
console.log("Missões concluidas: ", concluidas);

const mochila = ["Mapa", "Lanterna"];
const mochilaAtualizada = atualizarInventario(mochila, "pegar", "Bússola");
console.log("Mochila após pegar: ");