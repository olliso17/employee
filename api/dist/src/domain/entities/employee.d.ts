import EmployeeInterface from "./employee.interface.js";
type EmployeeProps = {
    name: string;
    email: string;
    job_position: string;
    departament: string;
    actions: string;
};
export declare class Employee implements EmployeeInterface {
    private _id;
    private _name;
    private _email;
    private _job_position;
    private _departament;
    private _actions;
    private _created_at;
    private _updated_at;
    private _active;
    constructor(props: EmployeeProps);
    get job_position(): string;
    get departament(): string;
    get actions(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get created_at(): Date;
    get updated_at(): Date;
    get active(): boolean;
    validateEmployee(): void;
}
export {};
