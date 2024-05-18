import { Employee } from "../../domain/entities/employee.js";
import { EmployeeModel } from "../models/employee.model.js";
import { AppError } from "../../tratandoErro.js";
import EmployeeRepositoryInterface from "./employee.repository.interface.js";


export class EmployeRepository implements EmployeeRepositoryInterface {
    async createEmployee(
        name: string,
        email: string,
        job_position: string,
        departament: string,
        actions: string): Promise<Employee> {
        try {
            return await EmployeeModel.create({
                name,
                email,
                job_position,
                departament,
                actions
            });
        }
        catch (error) {
            throw new  AppError('Não foi possivel criar functionario', 500);
        }
    }


    async getEmployeeById(id: string): Promise<Employee | null> {
        try {
            return await EmployeeModel.findById(id).exec();
        } catch (error) {
            throw new  AppError('Não há funcionário:', 500)
        }

    }

    async getAllEmployees(): Promise<Employee[]> {
        try {
            return await EmployeeModel.find().exec();
        } catch (error) {
            throw new  AppError('Não foi possível pegar todos os funcionários', 500)
        }
    }

    async updateEmployee(id: string, EmployeeData: any): Promise<Employee | null> {
        try {
            const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, EmployeeData, { new: true });

            return updatedEmployee;
        } catch (error) {
            throw new  AppError('Erro ao atualizar o funcionário:', 500);
        }
    }

    async deleteEmployee(id: string): Promise<void> {
        try {
            await EmployeeModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new  AppError('Não foi possível deletar o funcionário', 500);
        }
    }
}

export default new EmployeRepository();
