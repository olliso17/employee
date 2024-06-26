
import { Employee } from "../../domain/entities/employee.js";
import EmployeeRepositoryInterface from "../../infra/repositories/employee.repository.interface.js";


export class GetEmployeeByIdUsecase{
    constructor(private EmployeeRepository: EmployeeRepositoryInterface) {}
    async execute(id:string):Promise<Employee | null>{
        return this.EmployeeRepository.getEmployeeById(id);
    }
}