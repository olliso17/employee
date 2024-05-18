
import { Employee } from "../../domain/entities/employee";
import EmployeeRepositoryInterface from "../../infra/repositories/employee.repository.interface";
import { AppError } from "../../tratandoErro";


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