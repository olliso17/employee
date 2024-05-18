export class GetEmployeeByIdUsecase {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async execute(id) {
        return this.EmployeeRepository.getEmployeeById(id);
    }
}
//# sourceMappingURL=getEmployeeById.usecase.js.map