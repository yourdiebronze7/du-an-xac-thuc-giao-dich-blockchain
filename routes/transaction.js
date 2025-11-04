const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

router.post('/transactions', async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    await transaction.save();
    res.status(201).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/transactions', async (req, res) => {
  const transactions = await Transaction.find();
  res.send(transactions);
});

module.exports = router;
