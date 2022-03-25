const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  const result = createNewNote(req.body, notes);

  res.json(result);
});

router.delete('/notes/:id', (req, res) => {
  const result = deleteNote(req.params.id, notes);
  if (result) {
    res.destroy(result);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
