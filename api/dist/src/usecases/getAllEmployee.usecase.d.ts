import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";
export declare class GetAllEmployeesUsecase {
    private EmployeeRepository;
    constructor(EmployeeRepository: EmployeeRepositoryInterface);
    execute(): Promise<Employee[]>;
}
