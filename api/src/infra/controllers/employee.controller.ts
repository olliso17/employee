
import { Request, Response } from 'express';
import { CreateEmployeeUsecase } from '../../application/usecases/createEmployee.usecase.js';
import { UpdateEmployeeUsecase } from '../../application/usecases/updateEmployee.usecase.js';
import { GetAllEmployeesUsecase } from '../../application/usecases/getAllEmployee.usecase.js';
import { GetEmployeeByIdUsecase } from '../../application/usecases/getEmployeeById.usecase.js';
import { DeleteEmployeeUsecase } from '../../application/usecases/deleteEmployee.usecase.js';
import { EmployeRepository } from '../repositories/employee.repository.js';

export class EmployeeController {
    private createEmployeeUseCase: CreateEmployeeUsecase;
    private updateEmployeeUseCase: UpdateEmployeeUsecase;
    private getAllEmployeesUseCase: GetAllEmployeesUsecase;
    private getEmployeeByIdUseCase: GetEmployeeByIdUsecase;
    private deleteEmployeeUseCase: DeleteEmployeeUsecase;

    constructor() {
        const employeeRepository = new EmployeRepository();
        this.createEmployeeUseCase = new CreateEmployeeUsecase(employeeRepository);
        this.deleteEmployeeUseCase = new DeleteEmployeeUsecase(employeeRepository);
        this.updateEmployeeUseCase = new UpdateEmployeeUsecase(employeeRepository);
        this.getAllEmployeesUseCase = new GetAllEmployeesUsecase(employeeRepository);
        this.getEmployeeByIdUseCase = new GetEmployeeByIdUsecase(employeeRepository)
    }

    async createEmployee(req: Request, res: Response): Promise<void> {

        const { name, email, job_position, departament, actions } = req.body;
        try {
            const Employee = await this.createEmployeeUseCase.execute(name, email, job_position, departament, actions);
            res.status(201).json(Employee);
        } catch (error) {
            res.status(500).json({ error : 'Erro ao criar funcionario'});
        }
    }

    async getAllEmployees(req: Request, res: Response): Promise<void> {
        try {
            const Employees = await this.getAllEmployeesUseCase.execute()
            res.json(Employees);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter todos os funcionarios' });
        }
    }

    async getEmployeeById(req: Request, res: Response): Promise<void> {
        const EmployeeId = req.params.id;
        try {
            const Employee = await this.getEmployeeByIdUseCase.execute(EmployeeId);
            if (!Employee) {
                res.status(404).json({ error: 'Funcionário não encontrado' });
            }
            res.json(Employee);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter Funcionário' });
        }
    }

    async updateEmployee(req: Request, res: Response): Promise<void> {
        const EmployeeId = req.params.id;
        const EmployeeData = req.body;
        try {
            const Employee = await this.updateEmployeeUseCase.execute(EmployeeId, EmployeeData);
            if (!Employee) {
                res.status(404).json({ error: 'Funcionário não encontrado' });
            }
            res.json(Employee);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao editar functionário' });
        }
    }

    async deleteEmployee(req: Request, res: Response): Promise<void> {
        const EmployeeId = req.params.id;
        try {
          await this.deleteEmployeeUseCase.execute(EmployeeId);
          res.status(204).send();
        } catch (error) {
          res.status(500).json({ error: 'Erro ao excluir funcionário' });
        }
    }
}