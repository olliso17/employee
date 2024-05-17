import { Employee } from "../entities/employee.js";
import EmployeeRepositoryInterface from "../repositories/employee.repository.interface.js";


export class UpdateEmployeeUsecase{
    constructor(private EmployeeRepository: EmployeeRepositoryInterface) {}
        async execute(id:string, EmployeeData:any):Promise<Employee |null>{
            const Employee = await this.EmployeeRepository.getEmployeeById(id)
            if (!Employee){
                return null;
            }

            Object.assign(Employee, EmployeeData);
            return this.EmployeeRepository.updateEmployee(id, Employee)
        }
    
}