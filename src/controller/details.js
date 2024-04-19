import CrudController from "./crudController.js";

const detailsDataList = [
  { id: 1, name: "test user", description: "test" },
  { id: 2, name: "test user 1", description: "test description" },
];

const { createData, updateData, deleteData, filterData } = new CrudController(detailsDataList);

let validateKeys = ["name", "description"];

const createDetails = (req, res, next) => {
  let data = createData(req.body, validateKeys);
  if (data.errors) {
    return res.status(404).send(data);
  }
  res.status(200).send(data);
};

const updateDetails = (req, res, next) => {
  let id = req.params.id;
  let data = updateData(id, req.body, validateKeys);
  if (data.errors) {
    return res.status(404).send(data);
  }
  res.status(200).send(data);
};

const detailsData = (req, res, next) => {
  res.status(200).send(detailsDataList);
};

const deleteDetails = (req, res, next) => {
  let id = +req.params.id;
  let data = deleteData(id);
  res.status(200).send(data);
};

export default { createDetails, updateDetails, detailsData, deleteDetails };
