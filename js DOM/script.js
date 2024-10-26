let generateBtn = document.getElementById('generateBtn');
let copyBtn = document.getElementById('copyBtn');

generateBtn.onclick = function() {
    generateParagraphs();
};

copyBtn.onclick = function() {
    copySelected();
};

function generateParagraphs() {
    var num = parseInt(document.getElementById('numParagraphs').value);
    var paragraphsDiv = document.getElementById('paragraphs');
    paragraphsDiv.innerHTML = '';

    for (var i = 1; i <= num; i++) {
        createParagraph(paragraphsDiv, i);
    }
}

function createParagraph(container, index) {
    var p = document.createElement("p");
    p.textContent = "Parágrafo " + index;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + index;
    checkbox.value = "Parágrafo " + index;

    p.prepend(checkbox);
    container.appendChild(p);
}

function copySelected() {
    var paragraphsDiv = document.getElementById('paragraphs');
    var checkboxes = paragraphsDiv.querySelectorAll('input[type="checkbox"]:checked');
    var copiedText = '';

    checkboxes.forEach(function(checkbox) {
        copiedText += checkbox.value + '<br>';
    });

    var copiedTextDiv = document.getElementById('copiedText');
    copiedTextDiv.innerHTML = copiedText ? copiedText : 'Nenhum parágrafo selecionado';
}
