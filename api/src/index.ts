import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { EmployeeController } from './controllers/employee.controller.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));
const PORT = 3000;
const employeeController = new EmployeeController()
// mongoose.connect('mongodb://employee:example@mongo:27017/');
mongoose.connect('mongodb+srv://root:FZn6Dz8WJowdCgvx@cluster0.4jhjoyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/employee/create', async (req: Request, res: Response) => employeeController.createEmployee(req, res) );
app.get('/employees', async (req: Request, res: Response) => employeeController.getAllEmployees(req, res));
app.get('/employees/:id', async (req: Request, res: Response) => employeeController.getEmployeeById(req, res));
app.put('/employee/edit/:id', async (req: Request, res: Response) => employeeController.updateEmployee(req, res));
app.delete('/employee/delete/:id', async (req: Request, res: Response) => employeeController.deleteEmployee(req, res));

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});