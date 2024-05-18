import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";
export declare class UpdateEmployeeUsecase {
    private EmployeeRepository;
    constructor(EmployeeRepository: EmployeeRepositoryInterface);
    execute(id: string, EmployeeData: any): Promise<Employee | null>;
}
