import env from "dotenv";
env.config();
import jwt from "jsonwebtoken";

let tokenSecret = process.env.TOKENSECRET;

const createToken = (data) => {
  return jwt.sign(data, tokenSecret, { expiresIn: "1d" });
};

const validateToken = (token) => {
  return jwt.verify(token, tokenSecret);
};

export default { createToken, validateToken };
