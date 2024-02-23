const express = require('express');
const api = require('./routes/api');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server Running')
});