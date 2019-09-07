const express = require('express');

const router = express.Router();
const models = require('../models');

router.post('/', (req, res) => {
  models.todo.create(
    { note: req.body.note },
  ).then((todo) => {
    console.info('Todo created', JSON.stringify(todo));
    res.redirect(303, '/');
  }).catch((err) => {
    console.error(err);
    res.status(500).end('Error');
  });
});

module.exports = router;
