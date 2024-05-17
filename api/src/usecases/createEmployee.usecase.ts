import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";


export class CreateEmployeeUsecase{
    constructor(private EmployeeRepository: EmployeeRepositoryInterface) {}
        async execute(name: string, email: string, job_position: string, departament: string, actions: string):Promise<Employee |null>{
            return this.EmployeeRepository.createEmployee(name, email, job_position, departament, actions)
        }
    
}