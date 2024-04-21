import env from "dotenv";
env.config();
import jwt from "jsonwebtoken";

let tokenSecret = process.env.TOKENSECRET;

const createToken = (data) => {
  return jwt.sign(data, tokenSecret, { expiresIn: "1d" });
};

const validateToken = (token) => {
  try {
    let vtoken = jwt.verify(token, tokenSecret);
    return vtoken;
  } catch (e) {
    console.log("token error");
    return false;
  }
};

export default { createToken, validateToken };
