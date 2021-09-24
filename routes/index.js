const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
router.post('/addType', categoriesController);

module.exports = router;