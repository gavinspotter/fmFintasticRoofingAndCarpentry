const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const materialsSchema = new Schema({
  name: { type: String, required: true },
  dimensions: { type: String },
});

const projectsSchema = new Schema({
  type: { type: String, required: true },
  description: { type: String },
  materialsUsed: [materialsSchema],
  coverPhotoBucketId: { type: String, required: true },
  photosPhotoBucketIds: [{ type: String }],
  admin: { type: mongoose.Types.ObjectId, required: true, ref: "Admin" },
});

module.exports = mongoose.model("Projects", projectsSchema);
