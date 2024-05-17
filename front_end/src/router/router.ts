import axios from 'axios';

export async function fetchEmployees() {
    try {
        const response = await axios.get('http://localhost:3000/employees');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os funcionários:', error);
        return []; 
    }
}
