import axios from "axios";
export function fetchUserApi() {
  return axios.get("https://restcountries.com/v3.1/all");
}
