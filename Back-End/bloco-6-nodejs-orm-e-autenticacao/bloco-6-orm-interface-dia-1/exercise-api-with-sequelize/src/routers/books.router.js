const express = require('express');
const { bookController } = require('../controllers')

const router = express.Router();


router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

router.delete('/:id', bookController.deleteBook);

module.exports = router;