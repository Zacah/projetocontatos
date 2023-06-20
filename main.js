const form = document.getElementById('contatos');
const tbody = document.getElementById('contatos-tbody');
const contatos = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nomeInput = document.getElementById('nome-contato');
  const telefoneInput = document.getElementById('numero-telefone');

  const nome = nomeInput.value;
  const telefone = telefoneInput.value;

  if (verificarContatoExistente(nome, telefone)) {
    alert('Este nome ou número de telefone já está na lista de contatos!');
  } else {
    adicionarContato(nome, telefone);
    nomeInput.value = '';
    telefoneInput.value = '';
  }
});

function verificarContatoExistente(nome, telefone) {
  return contatos.some(contato => contato.nome === nome || contato.telefone === telefone);
}

function adicionarContato(nome, telefone) {
  const newRow = tbody.insertRow();

  const cell1 = newRow.insertCell();
  cell1.textContent = nome;

  const cell2 = newRow.insertCell();
  cell2.textContent = telefone;

  contatos.push({ nome, telefone });
}