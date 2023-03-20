import express from 'express';
import cors from 'cors';
import router from '@routes/index.route';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1', router);

app.use((_req, res, next) => {
  res.status(404).send({ message: 'Page not found' });
  next();
});

app.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
});
