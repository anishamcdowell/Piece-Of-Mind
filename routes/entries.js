const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// ALL ENTRIES
router.get('/', (req, res) => {
  res.send('Entries');
});

// ONE ENTRY BY ID
router.get('/entryIdNumber', (req, res) => {
  res.send('Entry #(entryIdNumber)');
});

router.post('/', (req, res) => {
  const entry = new Entry({
    date: req.body.date,
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tags,
    color: req.body.color,
  });

  console.log(req, body);
});

module.exports = router;
