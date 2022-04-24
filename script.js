// Retorna elemento pelo id
function byId(id) {
  return document.getElementById(id);
}

// Retorna elemento(s) segundo seu seletor
function qsa(selector) {
  return document.querySelectorAll(selector);
}

// Cria um novo elemento e o retorna
function createElement(elementName) {
  return document.createElement(elementName);
}

// Limpar todos os elementos filhos de um elemento pai segundo o seletor
function cleanChildren(selector) {
  const childElements = qsa(selector);
  for (let index = 0; index < childElements.length; index += 1) {
    childElements[index].remove();
  }
}

// Pega os valores inserido no input e os aplica ao parágrafo
function getInputValue() {
  const textInput = byId('carta-texto').value.trim();
  const paragraph = byId('carta-gerada');

  // Remova todos os elementos span do parágrafo
  cleanChildren('#carta-gerada span');

  if (textInput.length === 0) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  // O texto será quebrado e cada palavra se torará um item da lista
  const textInputSplited = textInput.split(' ');

  for (let index = 0; index < textInputSplited.length; index += 1) {
    const newSpan = createElement('span');
    newSpan.innerText = textInputSplited[index];

    paragraph.appendChild(newSpan);
  }
}

const criarCarta = byId('criar-carta');
criarCarta.onclick = getInputValue;
