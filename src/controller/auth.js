const data = [];

const signup = (req, res, next) => {
  let data = req.body;

  res.status(200).send(data);
};

const login = (req, res, next) => {
  res.status(200).send("adsf");
};

export default { signup, login };
