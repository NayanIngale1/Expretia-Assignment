const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    min_salary: { type: Number, required: true },
    max_salary: { type: Number, required: false },
    location: { type: String, required: false, default: null },
    company: { type: String, required: true },
    description: { type: String, required: true },
    skill_set:{ type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
