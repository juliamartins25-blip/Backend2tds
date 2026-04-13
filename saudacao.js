//Declaração da função parametro
function saudacao(nomeJogador){
    console.log(`Bem-vindo do jogo, ${nomeJogador}!`)
};

saudacao("Júlia");

//Função que recebe um valor, soma 1 e retorna um valor
function subirDeNivel(nivelAtual){
    return nivelAtual + 1
};

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log(`Seu nível atual é ${nivelAtualizado}`);

//Definir uma função que soma dois niveis
function soma(numero1, numero2){
    return numero1 + numero2
};

console.log(soma(5, 3));

// Verificar par
function verificarPar (numero){
    if (numero % 2 === 0){
        return "O número é par."
    } else {
        return "O número é impar."
    }
};

console.log(verificarPar(9));