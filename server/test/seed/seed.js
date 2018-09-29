const mongoose = require('mongoose');
const Table = require('../../models/table');

const id1 = mongoose.Types.ObjectId();
const id2 = mongoose.Types.ObjectId();
const tables = [
  {
    _id: id1,
    title: 'Table-1'
  },
  {
    _id: id2,
    title: 'Table-2'
  }
];

const populateTables = done => {
  Table.remove({})
    .then(() => Table.insertMany(tables))
    .then(() => done());
};
module.exports = { tables, populateTables };
