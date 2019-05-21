const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/expControl.js');

router.get('/', controller.index);
router.get('/:expenseId', controller.findById);
router.post('/', controller.create);
router.put('/:expenseId', controller.update);
router.delete('/:expenseId', controller.delete);

module.exports = router;
