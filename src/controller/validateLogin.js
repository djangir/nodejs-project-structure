import tokenutils from "../services/tokenutils.js";
import authController from "./auth.js";
import CrudController from "./crudController.js";

const { validateToken } = tokenutils;

const { data } = authController;

const validateLogin = (req, res, next) => {
  let token = req.headers.authorization;

  const { filterData } = new CrudController(data);

  let tokenMsg = () => next({ status: 401, message: "invalid token" });

  if (!token) {
    return tokenMsg();
  }
  token = token.split(" ")[1];

  let decode = validateToken(token);

  if (!decode) {
    return tokenMsg();
  }

  let matchData = filterData("id", decode.id);

  if (!matchData[0]) {
    return tokenMsg();
  }

  next();
};

export default validateLogin;
