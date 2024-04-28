const tryCodeBlock = async (req, res, next, block) => {
  try {
    let data = await block(req, res, next);

    res.status(200).send(data);
  } catch (e) {
    res.status(200).send(e);
  }
};

export { tryCodeBlock };
