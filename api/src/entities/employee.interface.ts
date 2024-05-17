export default interface EmployeeInterface {
    get id(): string;
    get name(): string;
    get email(): string;
    get job_position():string;
    get departament():string;
    get actions():string;
    get created_at(): Date
    get updated_at(): Date
    get active(): boolean
}