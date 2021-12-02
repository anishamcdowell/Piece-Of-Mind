const express = require('express');
const router = express.Router();

// Models
const Entry = require('../database/models/Entry');

// Controllers for routes
const EntriesController = require('../controllers/entries');

// router.get('/', (req, res) => EntriesController.getAll);
// router.get('/entryIdNumber', (req, res) => EntriesController.getOne);

router.get('/', EntriesController.getAll);
router.get('/entryIdNumber', (req, res) => res.send('Entry #(entryIdNumber)'));

// POST
// New entry

module.exports = router;
