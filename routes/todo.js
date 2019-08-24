const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', (req, res, next) => {
  models.todo.create(
    {note: req.body.note},
  ).then((todo) => {
    res.redirect(303, '/');
  }).catch((err) => {
    console.error(err);
    res.status(500).end('Error');
  });
});

module.exports = router;
