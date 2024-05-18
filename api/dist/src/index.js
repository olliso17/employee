import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { EmployeeController } from './controllers/employee.controller.js';
import cors from 'cors';
import { errorHandler } from './errorhandler.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(errorHandler);
app.use(cors(corsOptions));
const PORT = 3000;
const employeeController = new EmployeeController();
mongoose.connect('mongodb+srv://root:FZn6Dz8WJowdCgvx@cluster0.4jhjoyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.post('/employee/create', async (req, res) => employeeController.createEmployee(req, res));
app.get('/employees', async (req, res) => employeeController.getAllEmployees(req, res));
app.get('/employees/:id', async (req, res) => employeeController.getEmployeeById(req, res));
app.put('/employee/edit/:id', async (req, res) => employeeController.updateEmployee(req, res));
app.delete('/employee/delete/:id', async (req, res) => employeeController.deleteEmployee(req, res));
app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
//# sourceMappingURL=index.js.map