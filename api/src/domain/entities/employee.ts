import EmployeeInterface from "./employee.interface";
import { stringNotNullAndBlankSpace } from '../../../utils/regex';
import { AppError } from "../../tratandoErro";

const uuid = require("uuid");

type EmployeeProps = {
    name: string,
    email: string,
    job_position: string,
    departament: string,
    actions: string,
   
}

export class Employee implements EmployeeInterface {
    private _id: string;
    private _name: string;
    private _email: string;
    private _job_position: string;
    private _departament: string;
    private _actions: string;
    private _created_at: Date;
    private _updated_at: Date;
    private _active: boolean;

    constructor(props: EmployeeProps) {
        this._id = uuid.v4().toString();
        this._name = props.name;
        this._email = props.email;
        this._job_position = props.job_position;
        this._departament = props.departament;
        this._actions = props.actions;
        this._created_at = new Date;
        this._updated_at = new Date;
        this._active = true;
        this.validateEmployee();
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
    validateEmployee(){
        if (stringNotNullAndBlankSpace.test(this.name) === false) {
			throw new AppError("Name is not a valid employee",500);
		}

		if (stringNotNullAndBlankSpace.test(this.email) === false) {
			throw new AppError("Email is not a valid employee",500);
		}
        if (stringNotNullAndBlankSpace.test(this.departament) === false) {
			throw new AppError("Departament is not a valid employee",500);
		}
        if (stringNotNullAndBlankSpace.test(this.job_position) === false) {
			throw new AppError("Job Position is not a valid employee",500);
		}
        if (stringNotNullAndBlankSpace.test(this.actions) === false) {
			throw new AppError("Actions is not a valid employee",500);
		}

		
    };

}