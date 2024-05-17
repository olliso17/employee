import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";


export class GetEmployeeByIdUsecase{
    constructor(private EmployeeRepository: EmployeeRepositoryInterface) {}
    async execute(id:string):Promise<Employee | null>{
        return this.EmployeeRepository.getEmployeeById(id);
    }
}