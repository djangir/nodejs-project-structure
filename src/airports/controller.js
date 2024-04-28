import { duffelapiService } from "../services/APIServices/APIServices.js";

const airports = async (req, res, next) => {
  let id = req?.params?.id;
  const apiData = await duffelapiService(undefined, id);

  return apiData;
};

export { airports };
