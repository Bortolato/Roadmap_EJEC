console.log("Bruno")
console.log("Bem Vindo!")

// declaração de variável
let nomeCompleto = 'Bruno Bortolato';
console.log(nomeCompleto);
let idade = 20;
console.log(idade);
const valorIngressoAdulto = 20;

// Tipos de referencias
// - String literal
// - Number literal
// - Boolean
// - Undefined
// - Redefinir NULL


// Objetos

let pessoa = {
    nome: 'Bruno',
    idade: '30',
    altura: '1.80'
};
console.log(pessoa);


// Arrays

let familia = [20, 26,'maria', 54, 55];
console.log(familia.length)
console.log(familia[2]);


// Funções

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};
console.log(corSite);
resetaCor("vermelho", "claro");
console.log(corSite);


// Operadores Aritméticos
// + , - , * , / , **
// ++ , --

// Operadores de igualdade
// Igualdade estrita ===
// Igualdade solta ==

// Operador Ternário
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Operadores lógicos
// E (&&)
// OU (||)
// NOT (!)

// MINI-PROJETO 1 - trocando valores 
let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// If Else
// if(condição){}

// MINI-PROJETO 2 - Bom dia
let hora = 10;
if(hora > 6 && hora < 12 ){
    console.log("Bom dia");
}
else if(hora >12 && hora <18){
    console.log("Boa tarde");
}
else{
    console.log("Boa noite");
}

// Switch case
let permissao;

switch(permissao){
    case 'comum':
        console.log("usuário comum");
    break;
    case 'gerente':
        console.log("usuário gerente");
    break;
    case 'diretor':
        console.log("usuário diretor");
    break;
    default:
        console.log("usuário não reconhecido");
    break;
}

// Laços de repetição
// 1. for
// 2. while
// 3. do...while
// 4. for...in
// 5. for...of

for (let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelho', 'verde', 'azul'];

for (let cor of cores){
    console.log(cor);
}

// MINI-PROJETO número maior 

function maior(a,b){
    return a > b ? a : b;
}

// MINI-PROJETO FizzBuzz

function fizzbuzz(entrada){
    if ( typeof entrada !== 'number'){
        return 'não é um número';
    }
    else if ((entrada % 3 === 0) && (entrada % 5 === 0)){
        return 'FizzBuzz';
    }
    else if (entrada % 3 === 0){
        return 'Fizz';
    }
    else if (entrada % 5 === 0){
        return 'Buzz';
    }
}


// MINI-PROJETO Velocidade máxima

console.log(verificaVelocidade(80));

function verificaVelocidade(velocidade){
    const velocidadeMaxima = 70;
    if (velocidade <= velocidadeMaxima){
        return 'tudo certo';
    }
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / 5));
        if(pontos >= 12){
            return 'Carteira suspensa';
        }
        else{
            return pontos;
        }
    }
}

// MINI - PROJETO Valor impar oupar

console.log(exibirParidade(6));

function exibirParidade(número){
    if ((número % 2) === 0){
        return 'número par';
    }
    else{
        return 'número ímpar';
    }
}


// MINI-PROJETO Ler propriedades de um objeto

const filme = {
    título : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

console.log(exibirPropriedades(filme));
function exibirPropriedades(obj){
    let propriedade = '';
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            propriedade += obj[prop] + '\n';
        }
    }
    return propriedade;
}

// Factory Functions
// const celular = {
//     marcaCelular : 'ASUS',
//     tamanhoTela :{
//         vertical : 155,
//         horizontal : 75,
//     },
//     capacidadeBateria : 5000,
//     ligar : function(){
//         console.log("fazendo ligação...")
//     }
// }

// function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria,){
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar(){
//             console.log("Fazendo ligação...")
//         }
//     }
// }

// const celular1 = criarCelular('Apple', 5.5, 5000);
// console.log(celular1);


// Função de construtor
// Pascal Case
function Celular(marcaCelular,tamanhoTela,capacidadeBateria,){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("fazendo ligação...")
    }
}
const celular = new Celular('samsung', 6.0, 5500);
console.log(celular);


const novoObjeto = Object.assign({},Celular);
console.log(novoObjeto);
const objeto2 = {...Celular};


let endereco = {
    rua : 'tenente joão luiz maus',
    cidade : 'Tubarão',
    cep : '88706-751'
};

function exibirEndereco() {
    for (let chave in endereco){
        console.log(chave,endereco[chave]);    
    }
}
exibirEndereco(endereco);

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereço1 = new Endereco('a','b','c');
const endereço2 = new Endereco('a','b','c');

function saoIguais(endereco1, endereco2){
    return endereço1.rua === endereço2.rua && endereço1.cidade === endereço2.cidade && endereço1.cep === endereço2.cep
}
console.log(saoIguais(endereço1,endereço2));

function temEnderecoMemoriaIgual(endereco1, endereco2){
    return endereço1 === endereço2;
}
console.log(temEnderecoMemoriaIgual(endereço1,endereço2));


let blog = {
    titulo : 'Desenvolvimento em javascript',
    mensagem : 'Para encontrar uma linguagem que permite um desenvolvimento adequado é importante levar em consideração suas aplicações, aqui aprendo um pouco de javascript',
    autor : 'Bruno Bortolato',
    visualizacoes : 10,
    comentarios : [
        {autor : 'a', mensagem : 'b'},
        {autor : 'a', mensagem : 'b'}
    ],
    estaAoVivo : true
}
console.log(blog);

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor - autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}
let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);


// Mini-Projeto Faixa de preço

// Primeira opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999},
]

// O DOM é todo o html que contém em uma página, que pode ser acessado pela tecla F12 => elements


