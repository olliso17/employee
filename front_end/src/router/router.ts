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

export async function addEmployee(data:any){
    console.log(data)

    try {
        const response = await axios.post("http://localhost:3000/employee/create", data); 
        console.log(response.data)

        return response.data;
       
    } catch (error) {
        console.error("Error saving data:", error);
    }
}