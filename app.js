//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
const amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  const nome = document.getElementById('amigo').value;

  // Valida a entrada
  if (nome === "") {
    alert("Por favor, insira um nome.");
  } else {
    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();
  }
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ""; // Limpa a lista
  amigos.forEach(amigo => {
    const item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos dois amigos para sortear.");
  } else {
    const sorteados = [];
    amigos.forEach((amigo, index) => {
      let sorteado;
      do {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
      } while (sorteados.includes(sorteado) || sorteado === amigo);
      sorteados.push(sorteado);
      const resultadoItem = document.createElement('li');
      resultadoItem.textContent = `${amigo} tirou ${sorteado}`;
      document.getElementById('resultado').appendChild(resultadoItem);
    });
  }
}
