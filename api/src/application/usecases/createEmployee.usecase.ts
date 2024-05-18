
import { Employee } from "../../domain/entities/employee.js";
import EmployeeRepositoryInterface from "../../infra/repositories/employee.repository.interface.js";
import { AppError } from "../../tratandoErro.js";


export class CreateEmployeeUsecase{
    constructor(private EmployeeRepository: EmployeeRepositoryInterface) {}
        async execute(name: string, email: string, job_position: string, departament: string, actions: string):Promise<Employee |null>{
            if (!name.trim() || !email.trim() || !job_position.trim() || !departament.trim() || !actions.trim()) {
                throw new  AppError('Todos os campos devem ser preenchidos.', 500);
            }
            return this.EmployeeRepository.createEmployee(name, email, job_position, departament, actions)
        }
    
}