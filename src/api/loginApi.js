import axios from "axios";
import CONFIG from "../config/config";

export const login = async (loginData) => {
  debugger
  return axios.post(`${CONFIG.apiHost}/api/users/`, loginData);
}