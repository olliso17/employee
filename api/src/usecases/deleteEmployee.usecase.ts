import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";


export class DeleteEmployeeUsecase{
    constructor(private employeeRepository: EmployeeRepositoryInterface) {}
        async execute(id:string):Promise<void>{
            return this.employeeRepository.deleteEmployee(id)
        }
    
}