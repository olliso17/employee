import { Request, Response } from 'express';
export declare class EmployeeController {
    private createEmployeeUseCase;
    private updateEmployeeUseCase;
    private getAllEmployeesUseCase;
    private getEmployeeByIdUseCase;
    private deleteEmployeeUseCase;
    constructor();
    createEmployee(req: Request, res: Response): Promise<void>;
    getAllEmployees(req: Request, res: Response): Promise<void>;
    getEmployeeById(req: Request, res: Response): Promise<void>;
    updateEmployee(req: Request, res: Response): Promise<void>;
    deleteEmployee(req: Request, res: Response): Promise<void>;
}
