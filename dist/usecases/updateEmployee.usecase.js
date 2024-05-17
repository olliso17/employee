export class UpdateEmployeeUsecase {
    constructor(EmployeeRepository) {
        this.EmployeeRepository = EmployeeRepository;
    }
    async execute(id, EmployeeData) {
        const Employee = await this.EmployeeRepository.getEmployeeById(id);
        if (!Employee) {
            return null;
        }
        Object.assign(Employee, EmployeeData);
        return this.EmployeeRepository.updateEmployee(id, Employee);
    }
}
