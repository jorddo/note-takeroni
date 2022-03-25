const fs = require('fs');
const path = require('path');

// creation of new note
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

// to delete note
function deleteNote(id, notesArray) {
  const toBeDeleted = notesArray.filter((note) => note.id === id)[0];
  return toBeDeleted;
}
// // new note
// function createNewNote(newNote) {
//   console.log(db);
//   db.push(newNote);
//   fs.writeFile(path.resolve(__dirname, '../db/db.json'), JSON.stringify(db));
// }

// // finds note by id
// function findById(id, notesArray) {
//   const note = notesArray.filter((db) => db.id === id[0]);
//   return note;
// }

module.exports = { createNewNote, deleteNote };
