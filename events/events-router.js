const router = require('express').Router();

const db = require('./events-model.js');

router.post('/', (req, res) => {
  db.add(req.body)
    .then(dbRes => {
      res.status(201).json(dbRes);
    })
    .catch(error => {
      res.status(500).json({ message: 'This is where its failing' });
    });
});

router.get('/:id', (req, res) => {
  db.getById(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(dbRes => res.status(200))
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;