import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { errorHandler } from './errorhandler.js';
import connectDB from './infra/db/mongodb/database.js';
import router from './infra/routers/employeeRouters.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
connectDB();
app.use(errorHandler);
app.use(cors(corsOptions));
app.use(router);
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
//# sourceMappingURL=index.js.map