export class DeleteEmployeeUsecase {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async execute(id) {
        return this.employeeRepository.deleteEmployee(id);
    }
}
//# sourceMappingURL=deleteEmployee.usecase.js.map