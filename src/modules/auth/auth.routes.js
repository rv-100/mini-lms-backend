const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const { protect } = require('../../middlewares/auth.middleware');

router.get('/me', protect(), (req, res) => {
  res.json({ user: req.user });
});

router.post('/login', controller.login);

module.exports = router;
