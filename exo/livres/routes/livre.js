const express = require('express');
const router=express();
const livreController = require('../controllers/livreController.js');

router.get('/', livreController.list);
router.get('/add', livreController.add);
router.post('/add', livreController.save);
router.get('/livre/delete/:id', livreController.delete);
// router.get('/update/:id', utilisateurController.edit);
// router.post('/update/:id', utilisateurController.update);
// router.get('/delete/:id', utilisateurController.delete);

module.exports = router;
