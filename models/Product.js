const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  oldPrice: {
    type: Number,
    min: [0, 'Old price cannot be negative']
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'Discount cannot be negative'],
    max: [100, 'Discount cannot exceed 100%']
  },
  images: [{
    type: String,
    required: [true, 'At least one image is required'],
    match: [/^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/, 'Please provide valid image URLs']
  }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required'],
    index: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: [0, 'Stock cannot be negative']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isNew: {
    type: Boolean,
    default: false
  },
  sales: {
    type: Number,
    default: 0,
    min: [0, 'Sales cannot be negative']
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, 'Rating cannot be negative'],
    max: [5, 'Rating cannot exceed 5']
  },
  reviewCount: {
    type: Number,
    default: 0,
    min: [0, 'Review count cannot be negative']
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
// productSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// // Index for search optimization
// productSchema.index({ tags: 1 });
// productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);