const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  occupation: String,
  country: String,
  phone: String,
  branch: String,
  weight: Number,
  heightFeet: Number,
  heightInches: Number,
  bmi: String,
  bmiCategory: String,
  fitnessGoals: [String],
  smoking: String,
  alcohol: String,
  interestedInSession: String,
  activityLevel: String,
  eatingHabits: String,
  commitmentLevel: Number,
  comments: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Membership', membershipSchema);