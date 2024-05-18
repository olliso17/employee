import { Employee } from "../../domain/entities/employee.js";
import EmployeeRepositoryInterface from "./employee.repository.interface.js";
export declare class EmployeRepository implements EmployeeRepositoryInterface {
    createEmployee(name: string, email: string, job_position: string, departament: string, actions: string): Promise<Employee>;
    getEmployeeById(id: string): Promise<Employee | null>;
    getAllEmployees(): Promise<Employee[]>;
    updateEmployee(id: string, EmployeeData: any): Promise<Employee | null>;
    deleteEmployee(id: string): Promise<void>;
}
declare const _default: EmployeRepository;
export default _default;
