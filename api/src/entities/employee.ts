import EmployeeInterface from "./employee.interface.js";

const uuid = require("uuid");

type EmployeeProps = {
    name: string,
    email: string,
    created_at: Date,
    job_position:string,
    departament:string,
    actions:string,
    updated_at: Date,
    active: boolean
}

export class Employee implements EmployeeInterface {
    private _id: string;
    private _name: string;
    private _email: string;
    private _job_position:string;
    private _departament:string;
    private _actions:string;
    private _created_at: Date;
    private _updated_at: Date;
    private _active: boolean;

    constructor(props: EmployeeProps) {
        this._id = uuid.v4().toString();
        this._name = props.name;
        this._email = props.email;
        this._job_position=props.job_position;
        this._departament=props.departament;
        this._actions = props.actions;
        this._created_at = props.created_at;
        this._updated_at = props.updated_at;
        this._active = props.active;
    }
    get job_position(): string {
        return this._job_position;
    }
    get departament(): string {
        return this._departament;
    }
    get actions(): string {
        return this._actions;
    }
    get email(): string {
        return this._email;
    }
    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get created_at(): Date {
        return this._created_at
    }
    get updated_at(): Date {
        return this._updated_at
    }
    get active(): boolean {
        return this._active
    }
}