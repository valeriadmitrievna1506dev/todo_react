const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.enable('strict routing')

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const User = require('./server/models').User;
app.get('/users', async (req, res) => {
  console.log('all');
  try {
    const result = await User.findAll();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

require('./server/routes')(app);
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the Todo Application',
  })
);

module.exports = app;
