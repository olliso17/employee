import axios from 'axios';

export async function fetchEmployees() {
    try {
        const response = await axios.get('URL_DO_SEU_ENDPOINT_AQUI');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os funcionários:', error);
        return []; 
    }
}
