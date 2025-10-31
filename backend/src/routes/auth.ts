import express from 'express';
const router = express.Router();

// Placeholder auth routes for future implementation
router.post('/login', (req, res) => {
  res.status(501).json({ message: 'Authentication not implemented yet' });
});

router.post('/register', (req, res) => {
  res.status(501).json({ message: 'Registration not implemented yet' });
});

export default router;
