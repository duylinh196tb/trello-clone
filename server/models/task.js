const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  content: { type: String },
  column: {
    type: Schema.Types.ObjectId,
    ref: 'Column'
  }
});

module.exports = mongoose.model('Task', TaskSchema);
