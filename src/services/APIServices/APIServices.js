import axios from "axios";

const duffelapiService = async (endpoint = "air/airports", id) => {
  let accessToken = process.env.DUFFEL_ACCESS_TOKEN;

  let url = "https://api.duffel.com/";
  url += endpoint;
  if (id) {
    url += `/${id}`;
  }

  console.log(url);

  let config = {
    method: "get",
    url: url,
    headers: {
      "Accept-Encoding": "gzip",
      Accept: "application/json",
      "Duffel-Version": "v1",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  let res = await axios.request(config);

  return res.data;
};

export { duffelapiService };
