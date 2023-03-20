import { Router } from 'express';

const router = Router();

router.get('/api', (_req, res) => {
  res.json({ message: 'Welcome to my API' });
});

export default router;
