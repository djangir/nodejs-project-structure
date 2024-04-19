import CrudController from "./crudController.js";
import tokenutils from "../services/tokenutils.js";
const data = [
  {
    id: 1,
    userid: "user",
    password: "1234",
  },
];

const { createToken } = tokenutils;

const { createData, filterData } = new CrudController(data);

const signup = (req, res, next) => {
  let item = req.body;
  let filteredData = filterData("userid", item.userid);

  if (filteredData.length) {
    return res.status(409).send("user already registered");
  }

  let data = createData(item, ["password", "userid"]);

  if (data.errors) {
    return res.status(400).send(data.errors);
  }
  res.status(200).send(item);
};

const login = (req, res, next) => {
  let userData = req.body;
  let filteredData = filterData("userid", userData.userid);
  filteredData = filteredData[0];

  if (!filteredData) {
    return res.status(403).send("user not found");
  }

  let token = createToken(filteredData);
  res.status(200).send({ token: token });
};

export default { signup, login, data };
