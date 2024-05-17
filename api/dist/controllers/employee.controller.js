import { CreateEmployeeUsecase } from '../usecases/createEmployee.usecase.js';
import { UpdateEmployeeUsecase } from '../usecases/updateEmployee.usecase.js';
import { GetAllEmployeesUsecase } from '../usecases/getAllEmployee.usecase.js';
import { GetEmployeeByIdUsecase } from '../usecases/getEmployeeById.usecase.js';
import { EmployeRepository } from '../repositories/employee.repository.js';
import { DeleteEmployeeUsecase } from '../usecases/deleteEmployee.usecase.js';
export class EmployeeController {
    constructor() {
        const employeeRepository = new EmployeRepository();
        this.createEmployeeUseCase = new CreateEmployeeUsecase(employeeRepository);
        this.deleteEmployeeUseCase = new DeleteEmployeeUsecase(employeeRepository);
        this.updateEmployeeUseCase = new UpdateEmployeeUsecase(employeeRepository);
        this.getAllEmployeesUseCase = new GetAllEmployeesUsecase(employeeRepository);
        this.getEmployeeByIdUseCase = new GetEmployeeByIdUsecase(employeeRepository);
    }
    async createEmployee(req, res) {
        const { name, email, job_position, departament, actions } = req.body;
        try {
            const Employee = await this.createEmployeeUseCase.execute(name, email, job_position, departament, actions);
            res.status(201).json(Employee);
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async getAllEmployees(req, res) {
        try {
            const Employees = await this.getAllEmployeesUseCase.execute();
            res.json(Employees);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao obter empregadores' });
        }
    }
    async getEmployeeById(req, res) {
        const EmployeeId = req.params.id;
        try {
            const Employee = await this.getEmployeeByIdUseCase.execute(EmployeeId);
            if (!Employee) {
                res.status(404).json({ error: 'Empregador não encontrado' });
            }
            res.json(Employee);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao obter empregador' });
        }
    }
    async updateEmployee(req, res) {
        const EmployeeId = req.params.id;
        const EmployeeData = req.body;
        try {
            const Employee = await this.updateEmployeeUseCase.execute(EmployeeId, EmployeeData);
            if (!Employee) {
                res.status(404).json({ error: 'Empregador não encontrado' });
            }
            res.json(Employee);
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao editar empregador' });
        }
    }
    async deleteEmployee(req, res) {
        const EmployeeId = req.params.id;
        try {
            await this.deleteEmployeeUseCase.execute(EmployeeId);
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao excluir empregador' });
        }
    }
}
