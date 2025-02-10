//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nome = document.getElementById('nome').value;
    
    // Valida a entrada
    if (nome === "") {
      alert("Por favor, insira um nome.");
    } else {
      // Atualiza o array de amigos
      amigos.push(nome);
      
      // Limpa o campo de entrada
      document.getElementById('nome').value = "";
      
      // Atualiza a lista de amigos na página (opcional)
      atualizarListaAmigos();
    }
  }
  
  // Exemplo de array de amigos e função para atualizar a lista na página
  const amigos = [];
  function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista
    amigos.forEach(amigo => {
      const item = document.createElement('li');
      item.textContent = amigo;
      lista.appendChild(item);
    });
  }
  