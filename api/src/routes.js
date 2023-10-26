const { Router } = require('express');

const InternCoontroller = require('./app/controllers/InternController');

const router = Router()

// Routes of Interns
router.get('/interns', InternCoontroller.index);
router.get('/interns/:id', InternCoontroller.show);
router.delete('/interns/:id', InternCoontroller.delete);
router.post('/interns/', InternCoontroller.store);
router.put('/interns/', InternCoontroller.update);

// Routes of Hours


module.exports = router;
