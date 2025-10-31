import express from 'express';
const router = express.Router();

router.post('/subscribe', (req, res) => {
  res.status(501).json({ message: 'Newsletter subscription not implemented yet' });
});

export default router;
