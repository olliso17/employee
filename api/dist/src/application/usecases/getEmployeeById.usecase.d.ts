import { Employee } from "../../domain/entities/employee.js";
import EmployeeRepositoryInterface from "../../infra/repositories/employee.repository.interface.js";
export declare class GetEmployeeByIdUsecase {
    private EmployeeRepository;
    constructor(EmployeeRepository: EmployeeRepositoryInterface);
    execute(id: string): Promise<Employee | null>;
}
