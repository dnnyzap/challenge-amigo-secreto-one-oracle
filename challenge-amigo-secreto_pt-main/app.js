let amigos = [];

function exibeTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



function exibirListaDeAmigos(){
    let listaAmigos = document.getElementById(`listaAmigos`);

    listaAmigos.innerHTML = ``;

    amigos.forEach(amigo => {                               // percorre cada elemento do array e a função recebe o item atual 
        let item = document.createElement(`li`);
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    })
}


function adicionarAmigo() {                               // adiciona e verifica se é uma entrada válida
    let inputAmigo = document.getElementById(`amigo`);
    let nome = inputAmigo.value.trim();

    if(nome === "" || !isNaN(nome)){
        alert("Por favor, insira um nome válido! ") 
        return;     
    }
    if (amigos.includes(nome)){
        alert('este nome ja foi adicionado.');
        return;
    }
    amigos.push(nome);
    exibirListaDeAmigos();
    limparCampo();
}


function exibirResultado(amigoSecretoSorteado){
    let listaSorteado = document.getElementById('resultado');
    listaSorteado.innerHTML = '';

    let li = document.createElement('li');
    li.textContent = `${amigoSecretoSorteado} foi o amigo secreto sorteado!. `;
    listaSorteado.appendChild(li);
}


function limparCampo(){
    let inputAmigo = document.getElementById('amigo');
    inputAmigo.value = '';
}


function sortearAmigo(){
    if(amigos.length < 2){
        alert('Número mínimo necessário de amigos não foi preenchido.');
        return;
    }


    let sorteio = Math.floor(Math.random() * amigos.length);
    let resultado = amigos[sorteio];

    exibirResultado(resultado);
}



function limparListaAmigos(){
    amigos=[];
    let listaAmigos = document.getElementById('listaAmigos');
    let listaSorteado = document.getElementById('resultado');

    listaAmigos.innerHTML = '';
    listaSorteado.innerHTML = '';

}