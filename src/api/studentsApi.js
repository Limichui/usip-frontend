import axios from "axios";
import CONFIG from "../config/config";

export const students = async (studentData) => {
    return axios.post(`${CONFIG.apiHost}/api/estudiantes/`, studentData);
}