const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Banner title is required"],
    trim: true,
    maxlength: [100, "Banner title cannot exceed 100 characters"],
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Banner image is required"],
    trim: true,
    match: [
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif)$/,
      "Please provide a valid image URL",
    ],
  },
  link: {
    type: String,
    trim: true,
    required: [true, "Banner link is required"],
  },
  linkType: {
    type: String,
    enum: ["product", "category", "brand", "custom"],
    default: "custom",
  },
  linkId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "linkType",
    required: function () {
      return this.linkType !== "custom";
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
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

// Update timestamp on save
bannerSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// // Validate startDate and endDate
// bannerSchema.pre('save', function (next) {
//   if (this.endDate && this.startDate > this.endDate) {
//     return next(new Error('End date must be after start date'));
//   }
//   next();
// });

// // Index for efficient querying
// bannerSchema.index({ isActive: 1, isFeatured: 1, startDate: 1, endDate: 1 });

module.exports = mongoose.model("Banner", bannerSchema);
