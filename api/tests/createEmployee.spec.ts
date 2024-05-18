import { CreateEmployeeUsecase } from "../src/application/usecases/createEmployee.usecase";
import { AppError } from "../src/tratandoErro";


describe('CreateEmployeeUsecase', () => {
    let createEmployeeUsecase;
    let mockEmployeeRepository;

    beforeEach(() => {
        mockEmployeeRepository = {
            createEmployee: jest.fn()
        };
        createEmployeeUsecase = new CreateEmployeeUsecase(mockEmployeeRepository);
    });

    it('must create an employee successfully', async () => {
        const name = 'John Doe';
        const email = 'john.doe@example.com';
        const job_position = 'Developer';
        const departament = 'IT';
        const actions = 'Coding';

        const mockEmployee = { name, email, job_position, departament, actions };

        mockEmployeeRepository.createEmployee.mockResolvedValue(mockEmployee);

        const result = await createEmployeeUsecase.execute(name, email, job_position, departament, actions);

        expect(mockEmployeeRepository.createEmployee).toHaveBeenCalledWith(name, email, job_position, departament, actions);
        expect(result).toEqual(mockEmployee);
    });

    it('should throw an AppError if any required field is not filled in', async () => {
        const name = '';
        const email = 'john.doe@example.com';
        const job_position = 'Developer';
        const departament = 'IT';
        const actions = 'Coding';

        await expect(createEmployeeUsecase.execute(name, email, job_position, departament, actions)).rejects.toThrow(AppError);
        await expect(createEmployeeUsecase.execute(name, email, job_position, departament, actions)).rejects.toThrow('Todos os campos devem ser preenchidos.');
    });
});
