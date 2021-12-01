const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Entries', EntrySchema);
