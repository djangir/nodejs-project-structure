import { apiService } from "../services/APIServices/APIServices.js";

const airports = async (req, res, next) => {
  let id = req?.params?.id;
  const apiData = await apiService(undefined, id);

  return apiData;
};

export { airports };
