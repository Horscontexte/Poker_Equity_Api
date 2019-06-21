const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({


}, {
    timestamps: true
});

module.exports = mongoose.model('Results', ResultSchema);
