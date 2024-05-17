export class CreateEmployeeUsecase {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async execute(name, email, job_position, departament, actions) {
        if (!name.trim() || !email.trim() || !job_position.trim() || !departament.trim() || !actions.trim()) {
            throw new Error('Todos os campos devem ser preenchidos.');
        }
        return this.EmployeeRepository.createEmployee(name, email, job_position, departament, actions);
    }
}
