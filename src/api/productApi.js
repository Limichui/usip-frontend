import data from '../data/data.json';

export const getProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1500); // Para simular un retraso de la llamada a la api
    });
};