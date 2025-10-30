function addDices() {
  // Selecionando o container que aglomera tudo
  let containerPrincipal = document.querySelector("#dice-selection");

  // Selecionando a div que queremos copiar
  let personalizacaoDados = document
    .querySelector(".dice-information")
    .cloneNode(true);

  // Copiando a div para o final do container ao clicar no +
  containerPrincipal.appendChild(personalizacaoDados);
}

function rollDices() {
  let contagem = document.querySelectorAll(".dice-information").length;
  window.alert(contagem);
}
