const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get('/', controller.getBooks);
router.get('/:id', controller.getBooksById);
router.post('/', controller.addBook);
router.delete('/:id', controller.deleteBook);
router.put('/:id', controller.updateBook);

module.exports = router;