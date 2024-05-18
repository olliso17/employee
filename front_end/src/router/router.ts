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

    try {
        const response = await axios.post("http://localhost:3000/employee/create", data); 
        return response.data;
       
    } catch (error) {
        return error
    }
}
export async function getEmployeeById(employeeId:string){
    try {
        const response = await axios.get(`http://localhost:3000/employees/${employeeId}`);
        return response.data;
       
    } catch (error) {
        return error
    }
}
export async function editEmployee(employeeId:string, data:any){

    try {
        
        const response = await axios.put(`http://localhost:3000/employee/edit/${employeeId}`, data);
        return response.data;
       
    } catch (error) {
        return error;
    }
}
export async function deleteEmployee(employeeId:string | undefined){

    try {
        const response = await axios.delete(`http://localhost:3000/employee/delete/${employeeId}`);
        return response.data;
       
    } catch (error) {
        console.error("Erro ao deletar funcionário:", error);
    }
}