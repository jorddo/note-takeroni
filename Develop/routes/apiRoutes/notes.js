const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  const results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  const result = createNewNote(req.body, notes);

  res.json(result);
});

router.delete('/notes/:id', (req, res) => {
  const result = deleteNote(req.params.id, notes);
  if (result) {
    res.status(200).send('Hey. Great work.');
  } else {
    res.status(400).send('Aw shucks. Thats no good.');
  }
});

module.exports = router;
