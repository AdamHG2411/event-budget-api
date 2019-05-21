const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('../controllers/evtControl.js');

router.get('/', controller.index);
router.get('/:eventId', controller.findById);
router.post('/', controller.create);
router.put('/:eventId', controller.update);
router.delete('/:eventId', controller.delete);

module.exports = router;
