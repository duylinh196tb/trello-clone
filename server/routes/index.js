const express = require('express');
const tasks = require('./tables/tasks');
const tables = require('./tables/tables');

const routers = express();

routers.use('/api/v1/tasks', tasks);
routers.use('/api/v1/tables', tables);

routers.get('/', (_, res) => {
  res.json({
    code: 200,
    status: 'ok',
    message: 'Success!!!!!!'
  });
});
module.exports = routers;
