import mongoose, { Model, Schema, model } from 'mongoose';
import { Employee } from '../entities/employee.js';
import { regex } from '../../utils/regex.js';



const EmployeeSchema = new Schema<Employee>(
    {
        name: {
            type: String,
            required: true,
            validate: {
                validator: function(v: string) {
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
                validator: function(v: string) {
                    return regex.test(v);
                },
                message: props => `${props.value} não pode conter apenas espaços em branco!`
            }
        },
        job_position: {
            type: String,
            required: true,
            validate: {
                validator: function(v: string) {
                    return regex.test(v);
                },
                message: props => `${props.value} não pode conter apenas espaços em branco!`
            }
        },
        departament: {
            type: String,
            required: true,
            validate: {
                validator: function(v: string) {
                    return regex.test(v);
                },
                message: props => `${props.value} não pode conter apenas espaços em branco!`
            }
        },
        actions: {
            type: String,
            required: true,
            validate: {
                validator: function(v: string) {
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
    },
    {
        timestamps: true
    }
);

export const EmployeeModel: Model<Employee> = mongoose.model<Employee>('EmployeeModel', EmployeeSchema);