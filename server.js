//install
const express = require('express');

//execute
const app = express();

//middleware

//routes
app.get('/', (req, res) => {
  res.send('Homepage');
});

//connect to db + protect db username/pword

//listen on server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});

// const path = require('path');
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());
// app.use(express.static("public"));
