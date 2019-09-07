const express = require('express');

const router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', (req, res) => {
  models.todo.findAll()
    .then((todos) => {
      res.render('index', { title: 'Toy to do app', todos });
    });
});

module.exports = router;
