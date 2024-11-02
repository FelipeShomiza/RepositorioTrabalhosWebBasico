let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.onclick = tipoDeAtividade;

let currentDraggedElement = null; // Store reference to the dragged element

function tipoDeAtividade() {
    var tipo = document.getElementById('selectTipo');
    var texto2 = tipo.options[tipo.selectedIndex].text;
    if (texto2 == "Importante e Urgente") {
        adicionarAtividade('topleft');
    } else if (texto2 == "Importante, mas não Urgente") {
        adicionarAtividade('topright');
    } else if (texto2 == "Não Importante, mas Urgente") {
        adicionarAtividade('botleft');
    } else if (texto2 == "Não Importante e Não Urgente") {
        adicionarAtividade('botright');
    }
}

function adicionarAtividade(containerId) {
    var texto = document.getElementById('inputAtividade').value;
    var container = document.getElementById(containerId);
    if (texto.trim() === '') return; // Prevent adding empty tasks

    var p = document.createElement('p');
    p.textContent = texto;
    p.classList.add('draggable');
    p.setAttribute('draggable', 'true');

    // Add drag events
    p.addEventListener('dragstart', dragStart);
    p.addEventListener('dragend', dragEnd);

    container.appendChild(p);
    document.getElementById('inputAtividade').value = ''; // Clear input
}



// Drag and Drop Functions
function dragStart(event) {
    currentDraggedElement = event.target; // Store reference to the dragged element
    event.dataTransfer.setData('text/plain', event.target.textContent);
}

function dragEnd(event) {
    event.target.classList.remove('dragging');
}

const containers = document.querySelectorAll('.left, .right');

containers.forEach(container => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', drop);
});

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    
    // Remove the original element
    if (currentDraggedElement) {
        currentDraggedElement.remove();
    }

    // Create a new paragraph for the dropped item
    const p = document.createElement('p');
    p.textContent = event.dataTransfer.getData('text/plain');
    p.classList.add('draggable');
    p.setAttribute('draggable', 'true');

    // Add drag events for the new paragraph
    p.addEventListener('dragstart', dragStart);
    p.addEventListener('dragend', dragEnd);

    // Append to the container
    event.target.appendChild(p);
}
