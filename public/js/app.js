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
  let quantidadeDeDados = parseInt(
    document.querySelector(".dice-quantity-input").value
  );

  let dadoSelecionado = document.querySelector(".dice-type-selector").value;

  dadoSelecionado =
    dadoSelecionado == "d2"
      ? 2
      : dadoSelecionado == "d4"
      ? 4
      : dadoSelecionado == "d6"
      ? 6
      : dadoSelecionado == "d8"
      ? 8
      : dadoSelecionado == "d10"
      ? 10
      : dadoSelecionado == "d12"
      ? 12
      : 20;

  for (let i = 0; i < quantidadeDeDados; i++) {
    let resultado = Math.floor(Math.random() * dadoSelecionado) + 1;
    window.alert(resultado);
  }

  window.alert(resultado);
}
