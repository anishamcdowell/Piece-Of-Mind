// dependency installations
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
require('dotenv/config');

//execute express
const app = express();

// import routes
const entriesRoutes = require('./routes/entries.js');

// middleware - aka, use imported routes
app.use('/entries', entriesRoutes);

//routes
app.get('/', (req, res) => {
  res.send('Homepage');
});

//connect to database via mongoose
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to database');
  });
}

//listen on server
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});

// const path = require('path');
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());
// app.use(express.static("public"));
