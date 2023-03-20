import express from 'express';

import indexRoute from '@routes/index.route';

const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'hello' });
});

app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
