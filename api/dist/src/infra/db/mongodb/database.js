import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 10000));
        await mongoose.connect(process.env.URLMONGO).then(() => {
            console.log('MongoDB connected successfully');
        }).catch((err) => {
            console.log(err);
        });
    }
    catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=database.js.map