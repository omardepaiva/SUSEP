import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors'; // importando biblioteca do cors

const app = express();
app.use(express.json());
app.use(cors()); //declarando o uso do cors

import router from './routes.js'; // liberando as rotas pelo cors
app.use(router); // usando as rotas



