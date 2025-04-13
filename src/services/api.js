
import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com", //baseUrl should write
});

export default API;
