
import { Employee } from "../../domain/entities/employee.js";
import EmployeeRepositoryInterface from "../../infra/repositories/employee.repository.interface.js";
import { AppError } from "../../tratandoErro.js";


export class GetAllEmployeesUsecase{
    constructor(private EmployeeRepository: EmployeeRepositoryInterface) {}
    async execute():Promise<Employee[]>{
        try {
            return this.EmployeeRepository.getAllEmployees()
        } catch (error) {
            throw new AppError('Não foi possível pegar todos os funcionários', 500);
        }
        
    }
}