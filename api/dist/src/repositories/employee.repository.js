import { EmployeeModel } from "../models/employee.model.js";
import { AppError } from "../tratandoErro.js";
export class EmployeRepository {
    async createEmployee(name, email, job_position, departament, actions) {
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
            throw new AppError('Não foi possivel criar functionario', 500);
        }
    }
    async getEmployeeById(id) {
        try {
            return await EmployeeModel.findById(id).exec();
        }
        catch (error) {
            throw new AppError('Não há funcionário:', 500);
        }
    }
    async getAllEmployees() {
        try {
            return await EmployeeModel.find().exec();
        }
        catch (error) {
            throw new AppError('Não foi possível pegar todos os funcionários', 500);
        }
    }
    async updateEmployee(id, EmployeeData) {
        try {
            const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, EmployeeData, { new: true });
            return updatedEmployee;
        }
        catch (error) {
            throw new AppError('Erro ao atualizar o funcionário:', 500);
        }
    }
    async deleteEmployee(id) {
        try {
            await EmployeeModel.findByIdAndDelete(id).exec();
        }
        catch (error) {
            throw new AppError('Não foi possível deletar o funcionário', 500);
        }
    }
}
export default new EmployeRepository();
//# sourceMappingURL=employee.repository.js.map