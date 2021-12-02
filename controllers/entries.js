const db = require('../database/models');
const axios = require('axios');

// Define EntriesController methods
module.exports = {
  getAll: async function (req, res) {
    try {
      db.EntrySchema.find(req.query).then((entryModel) => res.json(entryModel));
    } catch (err) {
      res.status(422).json(err);
    }
  },
  //   getOne: function (req, res) {
  //     res.send('Entry #(entryIdNumber)');
  //   },
  //   create: function (req, res) {},
  //   edit: function (req, res) {},
  //   delete: function (req, res) {},
};
