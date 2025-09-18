import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_API_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
});

async function AxiosMiddleware(method, url, data = {}, options = {}) {
  switch (method) {
    case "post":
      return apiClient.post(url, data, options);
    case "head":
      return apiClient.head(url, options);
    case "patch":
      return apiClient.patch(url, data, options);
    case "put":
      return apiClient.put(url, data, options);
    case "delete":
      return apiClient.delete(url, { params: data, ...options });
    default: // GET
      return apiClient.get(url, { params: data, ...options });
  }
}

export default {
  get: (url, data = {}, options = {}) => AxiosMiddleware("get", url, data, options),
  post: (url, data = {}, options = {}) => AxiosMiddleware("post", url, data, options),
  head: (url, data = {}, options = {}) => AxiosMiddleware("head", url, data, options),
  patch: (url, data = {}, options = {}) => AxiosMiddleware("patch", url, data, options),
  put: (url, data = {}, options = {}) => AxiosMiddleware("put", url, data, options),
  delete: (url, data = {}, options = {}) => AxiosMiddleware("delete", url, data, options),
};
