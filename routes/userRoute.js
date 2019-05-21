const express = require('express');
const router = express.Router();
const controller = require('../controllers/userControl.js');

router.get('/', controller.index);
router.get('/:userId', controller.findById);
router.post('/', controller.create);
router.put('/:userId', controller.update);
router.delete('/:userId', controller.delete);

module.exports = router;
