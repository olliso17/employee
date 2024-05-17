import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { EmployeeController } from './controllers/employee.controller.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;
const employeeController = new EmployeeController()
mongoose.connect('mongodb+srv://root:LMy0KrLHMA5s1mO2@cluster0.4jhjoyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/employee/create', async (req: Request, res: Response) => employeeController.createEmployee(req, res) );
app.get('/employees', async (req: Request, res: Response) => employeeController.getAllEmployees(req, res));
app.get('/employees/:id', async (req: Request, res: Response) => employeeController.getEmployeeById(req, res));
app.put('/employee/edit/:id', async (req: Request, res: Response) => employeeController.updateEmployee(req, res));
app.delete('/employee/delete/:id', async (req: Request, res: Response) => employeeController.deleteEmployee(req, res));

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});