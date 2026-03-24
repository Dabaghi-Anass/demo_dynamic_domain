// app.js
const express = require('express');

const app = express();

// dynamic route
app.get('/:user_id', (req, res) => {
  const { user_id } = req.params;

  res.send(`
    <html>
      <body style="font-family: sans-serif; text-align:center; margin-top:50px;">
        <h1>User: ${user_id}</h1>
      </body>
    </html>
  `);
});

// fallback
app.get('/', (req, res) => {
  res.send('<h1>Main App</h1>');
});

app.listen(5000, () => {
  console.log('App running on port 5000');
});
