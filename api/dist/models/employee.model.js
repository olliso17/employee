import mongoose, { Schema } from 'mongoose';
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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
}, {
    timestamps: true
});
export const EmployeeModel = mongoose.model('EmployeeModel', EmployeeSchema);
