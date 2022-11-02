const login = async (req, res) => {
  try {
    const { token } = req;
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
};