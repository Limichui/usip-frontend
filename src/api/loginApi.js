import axios from "axios";
import CONFIG from "../config/config";

export const login = async ({ username, password }) => {
  return axios.post(`${CONFIG.apiHost}/api/login/`, {
    usuario: username,
    contraseña: password
  });
}
