const router = require('express').Router();
const ctrl = require('../controllers/categoryController');

router.post('/', ctrl.createCategory);
router.get('/', ctrl.getCategories);
router.get('/:id', ctrl.getCategory);
router.put('/:id', ctrl.updateCategory);
router.delete('/:id', ctrl.deleteCategory);

module.exports = router;