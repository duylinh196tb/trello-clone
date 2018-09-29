const Task = require('../models/task');

const getAllTasks = (req, res) => {
  res.json({
    code: 200,
    message: 'Get all tasks success'
  });
};

module.exports = { getAllTasks };
