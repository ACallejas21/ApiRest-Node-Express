import express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import indexRoutes from "./routes/index.routes.js";
import './config.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.use(express.json())
//app.use(express.static("src"))
app.use(indexRoutes) 
app.use('/rest/',empleadosRoutes)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use((req,res,next) => {
    res.status(404).json({
        mensaje: "ENDPOINT NOT FOUND"
    })
}) 


export default app