import mongoose, { Model, Schema, model } from 'mongoose';
import { Employee } from '../../domain/entities/employee.js';
import { randomUUID } from 'crypto';



const EmployeeSchema = new Schema<Employee>(
    {
        name: {
            type: String,
            required: true,
           
        },
        email: {
            type: String,
            required: true,
            unique: true,
           
        },
        job_position: {
            type: String,
            required: true,
           
        },
        departament: {
            type: String,
            required: true,
           
        },
        actions: {
            type: String,
            required: true,
           
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