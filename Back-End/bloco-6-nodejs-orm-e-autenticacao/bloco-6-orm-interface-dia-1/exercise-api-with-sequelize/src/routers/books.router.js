const express = require('express');
const { bookController } = require('../controllers')

const router = express.Router();

router.post('/', bookController.createBook);

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

module.exports = router;