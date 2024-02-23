const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', 'X-Token');
  }
  next();
});

router.get('/', (req, res) => {
  res.send({
    message: 'Hello World!'
  });
});

router.use(express.json());
router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

module.exports = router;