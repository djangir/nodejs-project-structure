import axios from "axios";

const apiService = async (endpoint = "endpoint", id) => {
  let accessToken = process.env.ACCESS_TOKEN;

  let url = "url";
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
      Authorization: `Bearer ${accessToken}`,
    },
  };

  let res = await axios.request(config);

  return res.data;
};

export { apiService };
