const uuid = require("uuid");
export class Employee {
    constructor(props) {
        this._id = uuid.v4().toString();
        this._name = props.name;
        this._email = props.email;
        this._job_position = props.job_position;
        this._departament = props.departament;
        this._actions = props.actions;
        this._created_at = props.created_at;
        this._updated_at = props.updated_at;
        this._active = props.active;
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
}
