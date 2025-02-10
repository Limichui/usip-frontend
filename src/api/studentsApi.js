import axios from "axios";
import CONFIG from "../config/config";

export const studentCreate = async (studentData) => {
    return axios.post(`${CONFIG.apiHost}/api/estudiantes/`, studentData);
}

export const getStudents = async () => {
    try {
        const response = await axios.get(`${CONFIG.apiHost}/api/estudiantes/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener los estudiantes:", error);
        throw error;
    }
};

export const studentUpdate = async (id, studentData) => {
    return await axios.put(`${CONFIG.apiHost}/api/estudiantes/${id}`, studentData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
};

export const deleteStudent = async (id) => {
    return await axios.delete(`${CONFIG.apiHost}/api/estudiantes/${id}`, { // Corregido
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
};