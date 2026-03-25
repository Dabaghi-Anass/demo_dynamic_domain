const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.json({
    name: 'hello world',
  });
});

app.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
  });
});

app.listen(5000, () => console.log('listening on 5000'));
