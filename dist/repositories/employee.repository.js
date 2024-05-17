import { EmployeeModel } from "../models/employee.model.js";
export class EmployeRepository {
    async createEmployee(name, email, job_position, departament, actions) {
        return await EmployeeModel.create({ name,
            email,
            job_position,
            departament,
            actions });
    }
    async getEmployeeById(id) {
        try {
            return await EmployeeModel.findById(id).exec();
        }
        catch (error) {
            console.error('Não há empregador:', error);
            return null;
        }
    }
    async getAllEmployees() {
        return await EmployeeModel.find().exec();
    }
    async updateEmployee(id, EmployeeData) {
        try {
            const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, EmployeeData, { new: true });
            return updatedEmployee;
        }
        catch (error) {
            console.error('Erro ao atualizar o empregador:', error);
            return null;
        }
    }
    async deleteEmployee(id) {
        await EmployeeModel.findByIdAndDelete(id).exec();
    }
}
export default new EmployeRepository();
