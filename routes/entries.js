const express = require('express');
const router = express.Router();

// ALL ENTRIES
router.get('/', (req, res) => {
  res.send('Entries');
});

// ONE ENTRY BY ID
router.get('/entryIdNumber', (req, res) => {
  res.send('Entry #(entryIdNumber)');
});

module.exports = router;
