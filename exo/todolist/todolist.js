const express = require('express');
const router=express();
const todolistController = require('./todolistController.js');

router.get('/:user', todolistController.list);
router.post('/add', todolistController.add);
router.get('/delete/:id', todolistController.delete);

module.exports = router;