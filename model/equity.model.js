const mongoose = require('mongoose');

const EquitySchema = mongoose.Schema({
    title: String,
    heroHand: String,
    vilainHand: String,
    heroEquity: String,
    vilainEquity: String,
    splitEquity: String,
}, {
    timestamps: false
});

module.exports = mongoose.model('Equitys', EquitySchema);
