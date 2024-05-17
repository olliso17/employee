export class CreateEmployeeUsecase {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async execute(name, email, job_position, departament, actions) {
        return this.EmployeeRepository.createEmployee(name, email, job_position, departament, actions);
    }
}
