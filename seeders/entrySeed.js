let mongoose = require('mongoose');
const Entry = require('../database/models/Entry');

mongoose
  .connect('mongodb://localhost/pieceOfMindDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to pieceOfMindDB...');
  })
  .catch((err) => {
    console.log(err);
  });

let entrySeed = [
  {
    title: 'Title 1',
    body: 'Body 1',
    tags: ['tag1a, tag1b'],
    color: '#000000',
  },
  {
    title: 'Title 2',
    body: 'Body 2',
    tags: ['tag2a, tag2b'],
    color: '#ffffff',
  },
  {
    title: 'Title 3',
    body: 'Body 3',
    tags: ['tag3a, tag3b'],
    color: '#fff000',
  },
];

const seedDB = async () => {
  await Entry.deleteMany({});
  await Entry.insertMany(entrySeed);
};

seedDB().then(() => {
  mongoose.connection.close();
});
