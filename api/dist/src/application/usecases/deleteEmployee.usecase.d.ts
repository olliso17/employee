import EmployeeRepositoryInterface from "../../infra/repositories/employee.repository.interface.js";
export declare class DeleteEmployeeUsecase {
    private employeeRepository;
    constructor(employeeRepository: EmployeeRepositoryInterface);
    execute(id: string): Promise<void>;
}
