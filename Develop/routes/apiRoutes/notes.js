const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = db;
  res.json(results);
});

router.post('/notes', (req, res) => {
  console.log('Hey');
  const result = createNewNote();
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.delete('/notes/:id', (req, res) => {
  req.body.id = animals.length.toString();

  if (!validateAnimal(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});

module.exports = router;
