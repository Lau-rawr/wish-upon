const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  // userId: { type: String, required: true },
  title: { type: String, unique: true },
  component: { type: String, unique: true },
  svg_url: { type: String, unique: true },
}, {
  timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;