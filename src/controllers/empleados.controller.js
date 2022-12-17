import { response } from "express";
import { pool } from "../db.js";
import Responder from "./respuesta.js";
import ResponderDelete from "./respuestaDelete.js";
import { NumberEachPage } from "../config.js";

export const getEmpleados = async (req, res) => {
  const { id, page, search } = req.query;

  try {
    let Empleados;

    if (page && search) {
      let minValue = 0;
      let maxValue = NumberEachPage;
      if (Number(page) == 1) {  
        minValue = 0;
        maxValue = NumberEachPage;
      } else {
        minValue = (Number(page) - 1) * NumberEachPage;
        maxValue = Number(page) * NumberEachPage;
      }
      [Empleados] = await pool.query(
        `select id, nombre, salario FROM empleado where estado = 1 and nombre like '%${search}%' limit ?, ?`,[ minValue, maxValue]
      );
    }else{
      if (!id) {
        [Empleados] = await pool.query(
          "SELECT id, nombre, salario FROM empleado WHERE estado = 1"
        );
      } else {
        [Empleados] = await pool.query(
          "SELECT id, nombre, salario FROM empleado WHERE estado = 1 and id = ?",
          [id]
        );
      }
    }

    if (!Empleados) {
      return res;
    }
    return Responder(
      res,
      Empleados,
      "No se encontraron empleados",
      "empleados: "
    );
  } catch (error) {
    res.status(500).json({
      mensaje: "algo fue mal",
      Error: error,
    });
  }
};

export const getEmpleadosById = async (req, res) => {
  try {
    const [Empleado] = await pool.query(
      "SELECT id, nombre, salario FROM empleado WHERE id = ?",
      [req.params.id]
    );

    if (!Empleado) {
      return res;
    }
    return Responder(res, Empleado, "No se encontró el Empleado", "empleado: ");
  } catch (error) {
    res.status(500).json({
      mensaje: "algo fue mal",
      Error: error,
    });
  }
};

export const createEmpleado = async (req, res) => {
  try {
    //const [result] = await

    //res.json(result[0]);
    // console.log(req.body);
    const { nombre, salario } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO empleado (nombre, salario) VALUES(?, ?)",
      [nombre, salario]
    );
    res.send({
      Empleado: [
        {
          id: rows.insertId,
          nombre,
          salario,
        },
      ],
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "algo fue mal",
      Error: error,
    });
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salario } = req.body;
    console.log(id, nombre, salario);
    const [result] = await pool.query(
      "UPDATE empleado SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?",
      [nombre, salario, id]
    );
    if (!result) {
      return res;
    }
    return ResponderDelete(res, result, "No se pudo encontrar el empleado");
  } catch (error) {
    res.status(500).json({
      mensaje: "algo fue mal",
      Error: error,
    });
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    //res.send("Eliminando empoleado")
    const [result] = await pool.query(
      "UPDATE empleado SET estado = 0 WHERE id = ?",
      [req.params.id]
    );
    if (!result) {
      return res;
    }
    return ResponderDelete(res, result, "No se pudo encontrar el empleado");
  } catch (error) {
    res.status(500).json({
      mensaje: "algo fue mal",
      Error: error,
    });
  }
};
