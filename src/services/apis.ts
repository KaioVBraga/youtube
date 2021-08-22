import axios from "axios";

export const api = axios.create({
  baseURL: "https://kaio-youtube-api.herokuapp.com",
  // baseURL: "http://localhost:3333",
});

export default api;
