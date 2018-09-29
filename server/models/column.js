const mongoose = require('mongoose');

const { Schema } = mongoose;

const ColumnSchema = new Schema({
  title: { type: String },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  ],
  table: {
    type: Schema.Types.ObjectId,
    ref: 'Table'
  },
  tasksOrder: { type: Array }
});

module.exports = mongoose.model('Column', ColumnSchema);
