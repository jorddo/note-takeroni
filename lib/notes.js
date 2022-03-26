const fs = require('fs');
const path = require('path');
const generateRandomNumber = require('../helpers/random');

// creation of new note
const createNewNote = (body, notesArray) => {
  const note = { id: generateRandomNumber(), ...body };
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

const deleteNote = (id, notesArray) => {
  const deleteIndex = notesArray.findIndex((note) => String(note.id) === id);
  notesArray.splice(deleteIndex, 1);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return true;
};

module.exports = { createNewNote, deleteNote };
