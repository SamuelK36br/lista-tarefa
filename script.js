// SELETORES:
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const numQuant = document.getElementsByClassName('quantidade');
const botao = document.getElementsByTagName('button');

// HEADINGS:
function paragrafosCriados(){
    h1.innerHTML='Paragrafos criados: ' + numQuant.length;
}
paragrafosCriados();

function criacaoAtiva(){
    h2.innerHTML='Criacao de paragrafos ativada!';
    h2.style.color='green';
}
function criacaoDesativada(){
    h2.innerHTML='Criacao de paragrafos desativada!';
    h2.style.color='red';
}
criacaoDesativada();

// CRIACAO DO PARAGRAFO:
function criarParagrafo(){
    const p = document.createElement('p');
    p.classList.add('quantidade');
    p.innerHTML=`Paragrafo Criado! (${numQuant.length + 1}x)`;
    p.style.color='aqua';
    body.appendChild(p);
}

let intervalo = null;

function criar(){
    if(intervalo === null){
        criacaoAtiva();
        intervalo = setInterval(()=>{
            criarParagrafo();
            paragrafosCriados();
        }, 1000);
    }
    botaoApertado(1);
}

function parar(){
    criacaoDesativada();
    clearInterval(intervalo);
    intervalo=null;
    botaoApertado(2);
}

// EVENTOS DE CLIQUES DOS BOTOES:
botao[0].onclick=criar;
botao[1].onclick=parar;

function botaoApertado(button){
    if(button === 1){
        botao[0].classList.add('apertado');
        botao[1].classList.remove('apertado');
    }
    else if (button === 2) {
        botao[1].classList.add('apertado');
        botao[0].classList.remove('apertado');
    }
}