import { duffelapiService } from "../services/APIServices/APIServices.js";

const cities = async (req, res, next) => {
  let id = req?.params?.id;

  const apiData = await duffelapiService("air/cities", id);

  return apiData;
};

export { cities };
