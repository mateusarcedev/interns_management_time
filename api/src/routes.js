const { Router } = require('express');

const InternCoontroller = require('./app/controllers/InternController');
const HourController = require('./app/controllers/hourController');

const router = Router()

// Routes of Interns
router.get('/interns', InternCoontroller.index);
router.get('/interns/:id', InternCoontroller.show);
router.delete('/interns/:id', InternCoontroller.delete);
router.post('/interns/', InternCoontroller.store);
router.put('/interns/', InternCoontroller.update);

// Routes of Hours
router.get('/hours', HourController.index);
router.post('/hours', HourController.store);

module.exports = router;
