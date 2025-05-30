import axios from "./httpClient";

export const getData = async (page = 1) => {
  const res = await axios.get("/templates", {
    params: { page },
    headers: {
      "X-tenant": "78cd60c9-e767-4d1e-b45d-6ba74f3742ee",
    },
  });
  return res.data;
};
