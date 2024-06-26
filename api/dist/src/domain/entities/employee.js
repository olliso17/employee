import { stringNotNullAndBlankSpace } from '../../../utils/regex.js';
import { AppError } from "../../tratandoErro.js";
const uuid = require("uuid");
export class Employee {
    constructor(props) {
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
    get job_position() {
        return this._job_position;
    }
    get departament() {
        return this._departament;
    }
    get actions() {
        return this._actions;
    }
    get email() {
        return this._email;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get created_at() {
        return this._created_at;
    }
    get updated_at() {
        return this._updated_at;
    }
    get active() {
        return this._active;
    }
    validateEmployee() {
        if (stringNotNullAndBlankSpace.test(this.name) === false) {
            throw new AppError("Name is not a valid employee", 500);
        }
        if (stringNotNullAndBlankSpace.test(this.email) === false) {
            throw new AppError("Email is not a valid employee", 500);
        }
        if (stringNotNullAndBlankSpace.test(this.departament) === false) {
            throw new AppError("Departament is not a valid employee", 500);
        }
        if (stringNotNullAndBlankSpace.test(this.job_position) === false) {
            throw new AppError("Job Position is not a valid employee", 500);
        }
        if (stringNotNullAndBlankSpace.test(this.actions) === false) {
            throw new AppError("Actions is not a valid employee", 500);
        }
    }
    ;
}
//# sourceMappingURL=employee.js.map