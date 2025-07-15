const mongoose = require('mongoose');

const guidePreferenceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  preferences: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }]
}, { timestamps: true });

module.exports = mongoose.model('GuidePreference', guidePreferenceSchema);
