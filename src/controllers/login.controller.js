const login = async (req, res) => {
  try {
    const { token } = req;
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
};