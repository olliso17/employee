export class GetAllEmployeesUsecase {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async execute() {
        return this.EmployeeRepository.getAllEmployees();
    }
}
