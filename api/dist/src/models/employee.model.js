import mongoose, { Schema } from 'mongoose';
import { regex } from '../../utils/regex.js';
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return regex.test(v);
            },
            message: props => `${props.value} não pode conter apenas espaços em branco!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return regex.test(v);
            },
            message: props => `${props.value} não pode conter apenas espaços em branco!`
        }
    },
    job_position: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return regex.test(v);
            },
            message: props => `${props.value} não pode conter apenas espaços em branco!`
        }
    },
    departament: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return regex.test(v);
            },
            message: props => `${props.value} não pode conter apenas espaços em branco!`
        }
    },
    actions: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return regex.test(v);
            },
            message: props => `${props.value} não pode conter apenas espaços em branco!`
        }
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
export const EmployeeModel = mongoose.model('EmployeeModel', EmployeeSchema);
