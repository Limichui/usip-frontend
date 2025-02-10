import axios from "axios";
import CONFIG from "../config/config";

export const studentCreate = async (studentData) => {
    console.log(studentData);
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

    await axios.put(`${CONFIG.apiHost}/api/estudiantes/${id}`, studentData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });

    // Hacer una segunda petición para obtener los datos actualizados
    const response = await axios.get(`${CONFIG.apiHost}/api/estudiantes/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });

    console.log("Datos actualizados recibidos:", response.data);
    return response.data; // Retorna el estudiante actualizado
};

export const deleteStudent = async (id) => {
    return await axios.delete(`${CONFIG.apiHost}/api/estudiantes/${id}`, { // Corregido
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
};