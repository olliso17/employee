import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";


export class GetAllEmployeesUsecase{
    constructor(private EmployeeRepository: EmployeeRepositoryInterface) {}
    async execute():Promise<Employee[]>{
        return this.EmployeeRepository.getAllEmployees()
    }
}