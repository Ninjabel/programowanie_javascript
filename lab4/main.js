const addNoteButton = document.getElementById('add-note-btn');
const titleInput = document.createElement('input');
const notesCon = document.getElementById('notes-con');
const notesConText = document.getElementById('notes-con-text');
const noteDescArea = document.createElement('textarea');
const notepadWin = document.getElementById('notepad-window');
const saveNoteBtn = document.createElement('button');
const colorsCon = document.getElementById('colors-con');
const colorArr = document.querySelectorAll('.color');

addNoteButton.addEventListener('click', addNote);
saveNoteBtn.addEventListener("click", saveNote);

colorArr.forEach((item, index) => {
    item.addEventListener('click', setColor => {
        console.log(index);
        switch (index) {
            case 0:
                addNoteButton.style.border = "1px solid red";
                notesCon.style.border = "1px solid red";
                notepadWin.style.border = "2px solid red";
            break;
            case 1:
                addNoteButton.style.border = "1px solid orange";
                notesCon.style.border = "1px solid orange";
                notepadWin.style.border = "2px solid orange";
            break;
            case 2:
                addNoteButton.style.border = "1px solid yellow";
                notesCon.style.border = "1px solid yellow";
                notepadWin.style.border = "2px solid yellow";
            break;
            case 3:
                addNoteButton.style.border = "1px solid yellowgreen";
                notesCon.style.border = "1px solid yellowgreen";
                notepadWin.style.border = "2px solid yellowgreen";
            break;
            case 4:
                addNoteButton.style.border = "1px solid cadetblue";
                notesCon.style.border = "1px solid cadetblue";
                notepadWin.style.border = "2px solid cadetblue";
            break;
            case 5:
                addNoteButton.style.border = "1px solid blue";
                notesCon.style.border = "1px solid blue";
                notepadWin.style.border = "2px solid blue";
            break;
            case 6:
                addNoteButton.style.border = "1px solid blueviolet";
                notesCon.style.border = "1px solid blueviolet";
                notepadWin.style.border = "2px solid blueviolet";
            break;
            case 7:
                addNoteButton.style.border = "1px solid violet";
                notesCon.style.border = "1px solid violet";
                notepadWin.style.border = "2px solid violet";
            break;
            case 8:
                addNoteButton.style.border = "1px solid white";
                notesCon.style.border = "1px solid white";
                notepadWin.style.border = "2px solid white";
            break;
        }


    });
})

function addNote() {
    addNoteButton.classList.add('note-title-con');
    addNoteButton.classList.remove('add-note-bttn');
    addNoteButton.textContent = '';
    addNoteButton.appendChild(titleInput);
    titleInput.classList.add('title-input', 'no-outline');
    titleInput.setAttribute('placeholder', 'Note title');
    titleInput.focus();
    notesConText.style.height = "0px";
    notesCon.style.height = "450px";
    notesCon.appendChild(noteDescArea);
    noteDescArea.classList.add('note-description-textarea', 'no-outline');
    noteDescArea.setAttribute('placeholder', 'Note content...')
    notepadWin.appendChild(saveNoteBtn);
    saveNoteBtn.classList.add('save-note-btn');
    saveNoteBtn.innerHTML = "Save Note";
    colorsCon.classList.add('colors-container');
}

function saveNote() {
    addNoteButton.classList.add('add-note-bttn');
    addNoteButton.classList.remove('note-title-con');
    addNoteButton.textContent = 'Add new note';
    titleInput.remove();
    notesCon.style.height = "535px";
    noteDescArea.remove();
    saveNoteBtn.remove();
    colorsCon.classList.remove('colors-container');
    addNoteButton.style.border = "1px solid white";
    notesCon.style.border = "1px solid white";
    notepadWin.style.border = "1px solid white";
}
