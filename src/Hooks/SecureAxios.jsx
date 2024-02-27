import axios from "axios";

const secureAxios = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_LINK,
  withCredentials: true,
});

export default secureAxios;
