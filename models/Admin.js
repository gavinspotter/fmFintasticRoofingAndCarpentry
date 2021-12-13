const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  projects: [
    { type: mongoose.Types.ObjectId, required: true, ref: "Projects" },
  ],
});

module.exports = mongoose.model("Admin", adminSchema);
