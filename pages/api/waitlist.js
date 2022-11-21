const handler = async (req, res) => {
  const { email } = req.body;

  res.status(200).json({ email });
};

export default handler;
