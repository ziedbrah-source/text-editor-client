import axios from "axios";
console.log(process.env.ServerPORT);
const instance = axios.create({
  baseURL: `http://localhost:3001/`,
});

export default instance;
