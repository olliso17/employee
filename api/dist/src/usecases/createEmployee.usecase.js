import { AppError } from "../tratandoErro.js";
export class CreateEmployeeUsecase {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async execute(name, email, job_position, departament, actions) {
        if (!name.trim() || !email.trim() || !job_position.trim() || !departament.trim() || !actions.trim()) {
            throw new AppError('Todos os campos devem ser preenchidos.', 500);
        }
        return this.EmployeeRepository.createEmployee(name, email, job_position, departament, actions);
    }
}
//# sourceMappingURL=createEmployee.usecase.js.map