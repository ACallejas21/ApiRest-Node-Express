import { Router} from "express";
import { getEmpleados, createEmpleado, updateEmpleado, deleteEmpleado, getEmpleadosById } from "../controllers/empleados.controller.js";

const router =  Router()

router.get("/empleados/:params", getEmpleados);

//router.get("/empleados/:id", getEmpleadosById);

router.post("/empleados", createEmpleado);

router.put("/empleados/:id", updateEmpleado);

router.delete("/empleados/:id", deleteEmpleado);


export default router