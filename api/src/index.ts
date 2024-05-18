import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { errorHandler } from './errorhandler';
import connectDB from './infra/db/mongodb/database';
import router from './infra/routers/employeeRouters';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

connectDB();

app.use(errorHandler);

app.use(cors(corsOptions));

app.use(router);

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});