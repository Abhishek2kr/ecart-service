const router = require('express').Router();
const {addCategoryController, getCategories} = require('../controllers/categoriesController');
const { addProductController, getProductsController } = require('../controllers/productsController');
router.post('/addType', addCategoryController);
router.get('/getTypes', getCategories);

router.post('/addProduct', addProductController);
router.get('/getProducts', getProductsController);


module.exports = router;