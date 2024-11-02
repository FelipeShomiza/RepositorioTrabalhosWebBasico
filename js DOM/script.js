    // Seleciona o botão de "Gerar" usando o ID do botão no HTML
    let generateBtn = document.getElementById('generateBtn');

    // Seleciona o botão de "Copiar" usando o ID do botão no HTML
    let copyBtn = document.getElementById('copyBtn');

    // Define o que acontece quando o botão "Gerar" é clicado: chama a função 'generateParagraphs'
    generateBtn.onclick = function() {
        generateParagraphs();
    };

    // Define o que acontece quando o botão "Copiar" é clicado: chama a função 'copySelected'
    copyBtn.onclick = function() {
        copySelected();
    };

    // Função para gerar parágrafos com caixas de seleção
    function generateParagraphs() {
        // Lê o número digitado pelo usuário no campo de input, convertendo para inteiro
        var num = parseInt(document.getElementById('numParagraphs').value);

        // Seleciona o div da esquerda onde os parágrafos serão inseridos, identificado pelo ID 'paragraphs'
        var paragraphsDiv = document.getElementById('paragraphs');

        // Limpa o conteúdo anterior desse div, para que novos parágrafos substituam o antigo conteúdo
        paragraphsDiv.innerHTML = '';

        // Cria os parágrafos conforme o número especificado pelo usuário
        for (var i = 1; i <= num; i++) {
            // Chama a função 'createParagraph' para cada parágrafo, passando o div de destino e o índice do parágrafo
            createParagraph(paragraphsDiv, i);
        }
    }

    // Função que cria um parágrafo com uma caixa de seleção (checkbox)
    // Recebe dois parâmetros:
    // 'container': o div onde o parágrafo será inserido (no caso, paragraphsDiv, o div da esquerda)
    // 'index': o número do parágrafo que está sendo criado, usado para identificar o parágrafo
    function createParagraph(container, index) {
        // Cria um elemento <p> para o parágrafo e define o seu texto como "Parágrafo X"
        var p = document.createElement("p");
        p.textContent = "Parágrafo " + index;

        // Cria uma caixa de seleção (checkbox) para permitir ao usuário selecionar o parágrafo
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";        // Define o tipo de input como checkbox
        checkbox.id = "checkbox" + index;  // Define um ID único para cada checkbox, como "checkbox1", "checkbox2" etc.
        checkbox.value = "Parágrafo " + index;  // Define o valor do checkbox, usado para exibir o texto ao copiar

        // Adiciona a caixa de seleção (checkbox) antes do texto do parágrafo
        p.prepend(checkbox);

        // Insere o parágrafo (com a caixa de seleção) no container, que neste caso é 'paragraphsDiv' (o div da esquerda)
        container.appendChild(p);
    }

    // Função para copiar o texto dos parágrafos selecionados (checkboxes marcados)
    function copySelected() {
        // Seleciona o div onde os parágrafos foram gerados (lado esquerdo)
        var paragraphsDiv = document.getElementById('paragraphs');

        // Obtém todos os checkboxes dentro do 'paragraphsDiv' que estão marcados (selecionados)
        var checkboxes = paragraphsDiv.querySelectorAll('input[type="checkbox"]:checked');

        // Inicializa uma string vazia para armazenar o texto dos parágrafos selecionados
        var copiedText = '';

        // Itera sobre cada checkbox marcado, adicionando o valor do checkbox à string 'copiedText'
        checkboxes.forEach(function(checkbox) {
            copiedText += checkbox.value + '<br>';  // Cada valor de checkbox representa o texto do parágrafo
        });

        // Seleciona o div da direita (copiedText), onde o texto copiado será exibido
        var copiedTextDiv = document.getElementById('copiedText');

        // Exibe o texto copiado no div da direita; se nada foi selecionado, mostra uma mensagem padrão
        copiedTextDiv.innerHTML = copiedText ? copiedText : 'Nenhum parágrafo selecionado';
    }