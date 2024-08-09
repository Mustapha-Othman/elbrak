import axios from "axios";
import config from "@/config";

const instance = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const fetcher = async ([method, path, get_params, post_data]) => {
  return await instance({
    method: method,
    url: path,
    headers: {
      Authorization: "Bearer " + config.API_KEY,
    },
    data: method.toLowerCase() === "get" ? undefined : post_data, // Only include data for non-GET requests
    params: method.toLowerCase() === "get" ? get_params : undefined,
  }).then((res) => {
    if (!res.data) {
      throw Error(res.data.message);
    }

    return res.data;
  });
};

export default instance;
