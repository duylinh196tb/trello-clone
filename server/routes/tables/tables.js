const express = require('express');
const tables = require('../../controllers/tables');
const Table = require('../../models/table');

const router = express.Router();
router.get('/', tables.getAllTables);
router.get('/:_id', tables.getTable);
router.post('/', tables.createTable);
router.delete('/', tables.deleteTable);

module.exports = router;
