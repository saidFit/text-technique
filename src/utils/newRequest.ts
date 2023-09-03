import axios from "axios";

const newRequest = axios.create({
  baseURL: "url of server", // for exemple http://localhost:5000/
  withCredentials: true,
});

export default newRequest;