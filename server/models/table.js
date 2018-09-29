const mongoose = require('mongoose');

const { Schema } = mongoose;

const TableSchema = new Schema({
  title: { type: String },
  columns: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Column'
    }
  ],
  columnsOrder: { type: Array }
});

module.exports = mongoose.model('Table', TableSchema);
