import { apiService } from "../services/APIServices/APIServices.js";

const cities = async (req, res, next) => {
  let id = req?.params?.id;

  const apiData = await apiService("air/cities", id);

  return apiData;
};

export { cities };
