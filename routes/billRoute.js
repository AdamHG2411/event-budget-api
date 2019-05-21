const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/billControl.js');

router.get('/', controller.index);
router.get('/:billId', controller.findById);
router.post('/', controller.create);
router.put('/:billId', controller.update);
router.delete('/:billId', controller.delete);

module.exports = router;
