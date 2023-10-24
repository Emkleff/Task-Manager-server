const express = require('express')
const router = express.Router();
//require all exports

const {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask,

} = require('../Controller/taskController');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:taskId').get(getSingleTask).patch(updateTask).delete(deleteTask)


module.exports = router;