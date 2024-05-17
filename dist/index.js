import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { EmployeeController } from './controllers/employee.controller.js';
import employeeRepository from './repositories/employee.repository.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;
const employeeController = new EmployeeController();
mongoose.connect('mongodb+srv://root:LMy0KrLHMA5s1mO2@cluster0.4jhjoyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.post('/Employee/create', async (req, res) => employeeController.createEmployee(req, res));
app.get('/Employees', async (req, res) => employeeController.getAllEmployees(req, res));
app.get('/Employees/:id', async (req, res) => employeeController.getEmployeeById(req, res));
app.put('/Employee/edit/:id', async (req, res) => employeeController.updateEmployee(req, res));
// Rota para excluir um empregador
app.delete('/Employees/:id', async (req, res) => {
    const EmployeeId = req.params.id;
    try {
        await employeeRepository.deleteEmployee(EmployeeId);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao excluir empregador' });
    }
});
app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
