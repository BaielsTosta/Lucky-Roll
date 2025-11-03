function buttonRemover() {
  let buttons = document.querySelectorAll(".add-dices-button");

  // Desativa todos os botões exceto o último
  Array.from(buttons).forEach((button, index) => {
    if (index !== buttons.length - 1) {
      button.style.display = "none";
    } else {
      button.style.display = "inline-block";
    }
  });
}

// Função que identifica os campos com a sua ordem
function idOrders() {
  // Função para pegar o ID. Fieldset, Quantidade, Tipo de Dado, Botão +
  let fieldsets = document.querySelectorAll(".dice-selection");
  let quantities = document.querySelectorAll(".dice-quantity-input");
  let dices_type = document.querySelectorAll(".dice-type-selector");
  let add_dice_buttons = document.querySelectorAll(".add-dices-button");

  // Atualizando os IDs de cada elemento individualmente
  fieldsets.forEach((fieldset, index) => {
    fieldset.id = `dice-selection-${index}`;
  });

  quantities.forEach((quantity, index) => {
    quantity.id = `dice-quantity-input-${index}`;
  });

  dices_type.forEach((dice_type, index) => {
    dice_type.id = `dice-type-selector-${index}`;
  });

  add_dice_buttons.forEach((add_dice_button, index) => {
    add_dice_button.id = `add-dices-button-${index}`;
  });
}

// Função para adicionar Dados
function addDices() {
  // Seleção do Container onde estão as Opções de Rolagem
  let container_dice_selection = document.querySelector(".dice-selection");

  // Seleção das opções do dado (pegando a última div de informações)
  let todas_divs_dados = document.querySelectorAll(".dice-information");
  let ultima_div_dados = todas_divs_dados[todas_divs_dados.length - 1];

  // Clonando a div
  let cloned_dice_div = ultima_div_dados.cloneNode(true);

  // Resetando os valores dos inputs clonados
  let input_quantidade = cloned_dice_div.querySelector(".dice-quantity-input");
  input_quantidade.value = "";

  // Adicionando evento de click no novo botão
  let novo_botao = cloned_dice_div.querySelector(".add-dices-button");
  novo_botao.onclick = addDices;

  // Colocando a div duplicada no final do container de seleção de dados
  container_dice_selection.appendChild(cloned_dice_div);

  idOrders();
  buttonRemover();
}

function rollDices() {
  let fieldsets = document.querySelectorAll(".dice-information");

  window.alert(fieldsets.length);
  fieldsets.forEach((fieldset, index) => {
    quantidade_de_dados = fieldset.querySelector(".dice-quantity-input").value;
    dado_selecionado = fieldset.querySelector(".dice-type-selector").value;

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
    const resultadoDosDados = singleRolls();
    text_roll.textContent = `${quantidade_de_dados}D${dado_selecionado} → [${resultadoDosDados.join(
      ", "
    )}]`;

    // Adiciona o texto ao container da rolagem
    container_rolagens.appendChild(text_roll);

    // Adiciona o container ao log de rolagens
    container_roll_log.appendChild(container_rolagens);
  });
}
