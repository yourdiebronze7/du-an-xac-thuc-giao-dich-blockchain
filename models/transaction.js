const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  from: String,
  to: String,
  amount: Number,
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Transaction', transactionSchema);