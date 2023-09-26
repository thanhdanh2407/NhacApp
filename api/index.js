import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.88.128:4000/api/songs",
  headers: {
    Authorization: "Bearer API_KEY",
  },
});
