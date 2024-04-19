import jwt from "jsonwebtoken";

let tokenSecret = "asdfasfsdafasdf";
const createToken = (data) => {
  return jwt.sign(data, tokenSecret);
};

const validateToken = (token) => {
  return jwt.verify(token, tokenSecret);
};

export default { createToken, validateToken };
