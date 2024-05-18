import { Router ,  Request, Response } from "express";
import { EmployeeController } from "../controllers/employee.controller.js";
const router = Router();
const employeeController = new EmployeeController()

router.post('/employee/create', async (req: Request, res: Response) => {
    await employeeController.createEmployee(req, res);
});

router.get('/employees', async (req: Request, res: Response) => {
    await employeeController.getAllEmployees(req, res);
});

router.get('/employees/:id', async (req: Request, res: Response) => {
    await employeeController.getEmployeeById(req, res);
});

router.put('/employee/edit/:id', async (req: Request, res: Response) => {
    await employeeController.updateEmployee(req, res);
});

router.delete('/employee/delete/:id', async (req: Request, res: Response) => {
    await employeeController.deleteEmployee(req, res);
});

export default router;