import { AppError } from "../../tratandoErro.js";
export class GetAllEmployeesUsecase {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async execute() {
        try {
            return this.EmployeeRepository.getAllEmployees();
        }
        catch (error) {
            throw new AppError('Não foi possível pegar todos os funcionários', 500);
        }
    }
}
//# sourceMappingURL=getAllEmployee.usecase.js.map