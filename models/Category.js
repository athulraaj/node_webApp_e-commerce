const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Category name cannot exceed 50 characters']
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/, 'Please provide a valid image URL']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// // Update timestamp on save
// categorySchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// // Index for efficient querying
// categorySchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model('Category', categorySchema);