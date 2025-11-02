// Função para adicionar Dados
function addDices() {
  // Seleção do Container onde estão as Opções de Rolagem
  let container_dice_selection = document.querySelector("#dice-selection");

  // Seleção das opções do dado
  let div_dice_options = document.querySelector(".dice-information");

  // Clonando a div
  let cloned_dice_div = div_dice_options.cloneNode(true);

  // Colocando a div duplicada no final do container de seleção de dados
  container_dice_selection.appendChild(cloned_dice_div);
}

// Função para rolar os Dados
function rollDices() {
  // Seleciona a Quantidade de Dados
  let quantidade_de_dados = document.querySelector(
    ".dice-quantity-input"
  ).value;

  // Seleciona o tipo de Dado
  let dado_selecionado = document.querySelector(".dice-type-selector").value;

  // Converte o dado Selecionado em um valor para ser usado no cálculo do giro
  dado_selecionado =
    dado_selecionado == "d2"
      ? 2
      : dado_selecionado == "d4"
      ? 4
      : dado_selecionado == "d6"
      ? 6
      : dado_selecionado == "d8"
      ? 8
      : dado_selecionado == "d10"
      ? 10
      : dado_selecionado == "d12"
      ? 12
      : 20;

  function singleRolls() {
    let roll_saver = [];
    // Faz o loop com as rolagens de dado
    for (let loop = 0; loop < quantidade_de_dados; loop++) {
      // Cálculo da Rolagem
      let resultado = Math.floor(Math.random() * dado_selecionado) + 1;
      roll_saver.push(resultado);
    }
    return roll_saver;
  }

  // Seleção do Container onde ficarão os registros de rolagem
  let container_roll_log = document.querySelector("#roll-log");

  // Criação do Container que vai armazenar a Rolagem
  let container_rolagens = document.createElement("div");
  container_rolagens.className = "roll-result";

  // Criação do Elemento de Texto onde nossas Rolagens vão aparecer
  let text_roll = document.createElement("p");
  text_roll.textContent = `Resultados das Rolagens do D${dado_selecionado}: [${singleRolls()}]`;

  // Adiciona o texto ao container da rolagem
  container_rolagens.appendChild(text_roll);

  // Adiciona o container ao log de rolagens
  container_roll_log.appendChild(container_rolagens);

  // Faz o loop com as rolagens de dado
  /*for (let loop = 0; loop < quantidade_de_dados; loop++) {
    // Cálculo da Rolagem
    let resultado = Math.floor(Math.random() * dado_selecionado) + 1;

    // Criação do Container que vai armazenar a Rolagem
    let container_rolagens = document.createElement("div");
    container_rolagens.className = "roll-result";

    // Criação do Elemento de Texto onde nossas Rolagens vão aparecer
    let text_roll = document.createElement("p");

    // Atribuição do Resultado ao Elemento de Texto
    text_roll.textContent = `Resultado do D${dado_selecionado}: ${resultado}`;

    // Adiciona o texto ao container da rolagem
    container_rolagens.appendChild(text_roll);

    // Adiciona o container ao log de rolagens
    container_roll_log.appendChild(container_rolagens);
  }*/

  // Chama a Função de Interpretar os Rolls
  //window.alert(singleRolls());
}
