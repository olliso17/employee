import EmployeeRepositoryInterface from "../../infra/repositories/employee.repository.interface.js";


export class DeleteEmployeeUsecase{
    constructor(private employeeRepository: EmployeeRepositoryInterface) {}
        async execute(id:string):Promise<void>{
            return this.employeeRepository.deleteEmployee(id)
        }
    
}