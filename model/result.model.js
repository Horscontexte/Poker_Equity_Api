const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
  heroHand: String,
  ev: String,
  callingRange: {
    vilainRange1: String,
    vilainRange2: String,
  },
  gameConfiguration: {
    ante: String,
    players: String,
    stack: String,
  }

}, {
    timestamps: true
});

module.exports = mongoose.model('Results', ResultSchema);
