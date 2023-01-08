class Note {
  constructor(title, content, color, pin) {
    this.title = title;
    this.content = content;
    this.color = color;
    this.pin = pin;
    this.date = new Date() + 1;
  }
}
  
let notes = [];

function addNote(title, content, color, pin) {
  let note = new Note(title, content, color, pin);
  notes.push(note);
  saveNotesToLocalStorage();
}

// zapis do localStorage
function saveNotesToLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(notes));  // JS do JSON
}

// pobieranie z localStorage
function getNotesFromLocalStorage() {
  let storedNotes = localStorage.getItem('notes');
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
  } 
}
  
function displayNotes() {
  let notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';

  // Dla każdej notatki z tablicy notatek
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];

    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    // Pin
    if (note.pin) {
      noteDiv.classList.add('pinned');
    }
    noteDiv.style.backgroundColor = note.color;

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('note-title');
    titleDiv.innerText = note.title;

    let contentDiv = document.createElement('div');
    contentDiv.classList.add('note-content');
    contentDiv.innerText = note.content;

    // Przyciski
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Usuń';
    deleteButton.addEventListener('click', function() {
    deleteNote(i);
    });

    let pinButton = document.createElement('button');
    pinButton.classList.add('pin-button');
    pinButton.innerText = note.pin ? 'Odepnij' : 'Przypnij';
    pinButton.addEventListener('click', function() {
    togglePin(i);
    });

    // Data
    let dateDiv = document.createElement('div');
    dateDiv.classList.add('note-date');
    dateDiv.innerText = note.date;

    // Wszystkie elementy do jednego diva
    noteDiv.appendChild(titleDiv);
    noteDiv.appendChild(contentDiv);
    noteDiv.appendChild(deleteButton);
    noteDiv.appendChild(pinButton);
    noteDiv.appendChild(dateDiv);

    // Dodaj notatki do listy notatek na stronie
    notesList.appendChild(noteDiv);

  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotesToLocalStorage();
  displayNotes();
}

function togglePin(index) {
let note = notes[index];
note.pin = !note.pin;
saveNotesToLocalStorage();
displayNotes();
}
    
getNotesFromLocalStorage();

displayNotes();

let form = document.getElementById('add-note-form');
let titleInput = document.getElementById('title-input');
let contentInput = document.getElementById('content-input');
let colorInput = document.getElementById('color-input');
let pinInput = document.getElementById('pin-input');

form.addEventListener('submit', function(event) {
event.preventDefault();

let title = titleInput.value;
let content = contentInput.value;
let color = colorInput.value;
let pin = pinInput.checked;

addNote(title, content, color, pin);
displayNotes();

// Czyszczenie formularza
titleInput.value = '';
contentInput.value = '';
colorInput.value = '#FFFFFF';
pinInput.checked = false;
});