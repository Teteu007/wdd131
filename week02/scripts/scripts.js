const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Carregar capítulos salvos no localStorage
window.addEventListener('DOMContentLoaded', loadChapters);

// Função para adicionar um capítulo à lista
button.addEventListener('click', () => {
    const chapter = input.value.trim();
    if (chapter === '') {
        alert('Por favor, insira um capítulo.');
        return;
    }
    if (isDuplicate(chapter)) {
        alert('Este capítulo já está na lista.');
        return;
    }

    addChapter(chapter);
    saveChapter(chapter);
    input.value = '';
    input.focus();
});

function addChapter(chapter) {
    const listItem = document.createElement('li');
    listItem.textContent = chapter;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
        removeChapter(chapter);
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

function isDuplicate(chapter) {
    const chapters = Array.from(list.children).map(item => item.textContent.replace('❌', '').trim());
    return chapters.includes(chapter);
}

function saveChapter(chapter) {
    let chapters = JSON.parse(localStorage.getItem('chapters')) || [];
    chapters.push(chapter);
    localStorage.setItem('chapters', JSON.stringify(chapters));
}

function loadChapters() {
    let chapters = JSON.parse(localStorage.getItem('chapters')) || [];
    chapters.forEach(chapter => addChapter(chapter));
}

function removeChapter(chapter) {
    let chapters = JSON.parse(localStorage.getItem('chapters')) || [];
    chapters = chapters.filter(item => item !== chapter);
    localStorage.setItem('chapters', JSON.stringify(chapters));
}
