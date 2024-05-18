import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller.js";
const router = Router();
const employeeController = new EmployeeController();
router.post('/employee/create', async (req, res) => {
    await employeeController.createEmployee(req, res);
});
router.get('/employees', async (req, res) => {
    await employeeController.getAllEmployees(req, res);
});
router.get('/employees/:id', async (req, res) => {
    await employeeController.getEmployeeById(req, res);
});
router.put('/employee/edit/:id', async (req, res) => {
    await employeeController.updateEmployee(req, res);
});
router.delete('/employee/delete/:id', async (req, res) => {
    await employeeController.deleteEmployee(req, res);
});
export default router;
//# sourceMappingURL=employeeRouters.js.map