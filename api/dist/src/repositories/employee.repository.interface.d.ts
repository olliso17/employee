import { Employee } from "../entities/employee.js";
interface EmployeeRepositoryInterface {
    createEmployee(name: string, email: string, job_position: string, departament: string, actions: string): Promise<Employee>;
    getEmployeeById(id: string): Promise<Employee | null>;
    getAllEmployees(): Promise<Employee[]>;
    updateEmployee(id: string, Employee: any): Promise<Employee | null>;
    deleteEmployee(id: string): Promise<void>;
}
export default EmployeeRepositoryInterface;
