import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";
export declare class CreateEmployeeUsecase {
    private EmployeeRepository;
    constructor(EmployeeRepository: EmployeeRepositoryInterface);
    execute(name: string, email: string, job_position: string, departament: string, actions: string): Promise<Employee | null>;
}
