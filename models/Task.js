const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' }
});
module.exports = mongoose.model('Task', taskSchema);
