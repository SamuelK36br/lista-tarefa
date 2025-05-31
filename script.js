// SELETORES:
const lista = document.getElementById('lista');
const input = document.getElementById('escreverTarefa');
const botao = document.getElementById('adicionarTarefa');


botao.onclick=tarefa;

let numLista = 0;
let checkbox = null;
let div;
function tarefa() {
    div = document.createElement('div');
    div.classList.add('lista');
    div.setAttribute('id', `lista${numLista++}`);
    
    const tarefa = document.createElement('span');
    tarefa.innerHTML=input.value;
    tarefa.classList.add('tarefa');
    
    checkbox = document.createElement('input');
    checkbox.type='checkbox';
    
    div.appendChild(checkbox);
    div.appendChild(tarefa);
    lista.appendChild(div);
}