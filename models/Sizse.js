const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Size name is required'],
    trim: true,
    maxlength: [20, 'Size name cannot exceed 20 characters']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    index: true
  },
  isActive: {
    type: Boolean,
    default: true
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
// sizeSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// // Index for efficient querying
// sizeSchema.index({ name: 1, category: 1 }, { unique: true, partialFilterExpression: { category: { $exists: true } } });

module.exports = mongoose.model('Size', sizeSchema);