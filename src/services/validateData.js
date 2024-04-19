const validateIntParams = (req, res, next) => {
  let params = req.params;
  let keys = Object.keys(params);

  let errors = {};
  let isErrors = false;

  keys.forEach((key) => {
    let param = params[key];
    if (isNaN(param)) {
      isErrors = true;
      errors[key] = `${key} should be a number`;
    }
  });

  if (isErrors) {
    next({ message: errors, status: 400 });
  }
  next();
};

export default {
  validateIntParams,
};
