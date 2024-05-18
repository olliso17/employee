import { UpdateEmployeeUsecase } from "../src/application/usecases/updateEmployee.usecase";


describe('UpdateEmployeeUsecase', () => {
    let updateEmployeeUsecase;
    let mockEmployeeRepository;

    beforeEach(() => {
        mockEmployeeRepository = {
            getEmployeeById: jest.fn(),
            updateEmployee: jest.fn()
        };
        updateEmployeeUsecase = new UpdateEmployeeUsecase(mockEmployeeRepository);
    });

    it('deve atualizar um funcionário com sucesso', async () => {
        const id = '123';
        const existingEmployee = { id, name: 'John Doe', email: 'john.doe@example.com', job_position: 'Developer', departament: 'IT', actions: 'Coding' };
        const updatedEmployeeData = { name: 'John Smith', email: 'john.smith@example.com' };
        const updatedEmployee = { ...existingEmployee, ...updatedEmployeeData };

        mockEmployeeRepository.getEmployeeById.mockResolvedValue(existingEmployee);
        mockEmployeeRepository.updateEmployee.mockResolvedValue(updatedEmployee);

        const result = await updateEmployeeUsecase.execute(id, updatedEmployeeData);

        expect(mockEmployeeRepository.getEmployeeById).toHaveBeenCalledWith(id);
        expect(mockEmployeeRepository.updateEmployee).toHaveBeenCalledWith(id, updatedEmployee);
        expect(result).toEqual(updatedEmployee);
    });

    it('deve retornar null se o funcionário não for encontrado', async () => {
        const id = '123';
        const updatedEmployeeData = { name: 'John Smith', email: 'john.smith@example.com' };

        mockEmployeeRepository.getEmployeeById.mockResolvedValue(null);

        const result = await updateEmployeeUsecase.execute(id, updatedEmployeeData);

        expect(mockEmployeeRepository.getEmployeeById).toHaveBeenCalledWith(id);
        expect(mockEmployeeRepository.updateEmployee).not.toHaveBeenCalled();
        expect(result).toBeNull();
    });
});
