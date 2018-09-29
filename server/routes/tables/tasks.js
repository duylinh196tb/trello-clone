const express = require('express');
const tasks = require('../../controllers/tasks');
const Task = require('../../models/task');

const router = express.Router();
router.get('/', tasks.getAllTasks);

module.exports = router;
