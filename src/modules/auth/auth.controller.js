const { generateToken } = require('./auth.service');

exports.login = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email required' });
  }

  const token = generateToken({ email, role: 'student' });

  return res.json({ token });
};
