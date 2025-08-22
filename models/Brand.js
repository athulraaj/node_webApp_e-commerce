const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Brand name is required"],
    unique: true,
    trim: true,
    maxlength: [50, "Brand name cannot exceed 50 characters"],
  },
  description: {
    type: String,
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
    match: [
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/,
      "Please provide a valid image URL",
    ],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// // Update timestamp on save
// brandSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// // Index for efficient querying
// brandSchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model("Brand", brandSchema);
