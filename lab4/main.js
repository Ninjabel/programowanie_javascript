const addNoteButton = document.getElementById('add-note-btn');
const titleInput = document.createElement('input');
const notesCon = document.getElementById('notes-con');
const notesConText = document.getElementById('notes-con-text');
const noteDescArea = document.createElement('textarea');
const notepadWin = document.getElementById('notepad-window');
const saveNoteBtn = document.createElement('button');

addNoteButton.addEventListener('click', addNote);
saveNoteBtn.addEventListener("click", saveNote);


function addNote() {
    addNoteButton.classList.add('note-title-con');
    addNoteButton.classList.remove('add-note-bttn');
    addNoteButton.textContent = '';
    addNoteButton.appendChild(titleInput);
    titleInput.classList.add('title-input', 'no-outline');
    titleInput.focus();
    notesConText.remove();
    notesCon.style.height = "450px";
    notesCon.appendChild(noteDescArea);
    noteDescArea.classList.add('note-description-textarea', 'no-outline');
    notepadWin.appendChild(saveNoteBtn);
    saveNoteBtn.classList.add('save-note-btn');
    saveNoteBtn.innerHTML = "Save Note";
}

function saveNote() {
    addNoteButton.classList.add('add-note-bttn');
    addNoteButton.classList.remove('note-title-con');
    addNoteButton.textContent = 'Add new note';
    titleInput.remove();
    notesCon.style.height = "520px";
    noteDescArea.remove();
    saveNoteBtn.remove();
}