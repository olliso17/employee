import { Employee } from "../entities/employee.js";
import { EmployeeModel } from "../models/employee.model.js";
import EmployeeRepositoryInterface from "./employee.repository.interface.js";


export class EmployeRepository implements EmployeeRepositoryInterface{
    async createEmployee( name: string,
        email: string,
        job_position: string,
        departament: string,
        actions: string): Promise<Employee> {
            
        return await EmployeeModel.create( {name,
            email,
            job_position,
            departament,
            actions});
    }

    async getEmployeeById(id: string): Promise<Employee | null> {
        try {
          return await EmployeeModel.findById(id).exec();  
        } catch (error) {
            console.error('Não há empregador:', error);
            return null;
        }
        
    }

    async getAllEmployees(): Promise<Employee[]> {
        return await EmployeeModel.find().exec();
    }

    async updateEmployee(id: string, EmployeeData:any): Promise<Employee | null> {
        try {
            const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, EmployeeData, { new: true });

            return updatedEmployee;
        } catch (error) {
            console.error('Erro ao atualizar o empregador:', error);
            return null;
        }
    }

    async deleteEmployee(id: string): Promise<void> {
        await EmployeeModel.findByIdAndDelete(id).exec();
    }
}

export default new EmployeRepository();
