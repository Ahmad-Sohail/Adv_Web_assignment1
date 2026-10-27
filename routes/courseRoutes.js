const router = require('express').Router();
const ctrl = require('../controllers/courseController');

router.post('/', ctrl.createCourse);
router.get('/', ctrl.getCourses);
router.get('/:id', ctrl.getCourse);
router.put('/:id', ctrl.updateCourse);
router.delete('/:id', ctrl.deleteCourse);

module.exports = router;