import { pool } from "../db.js";
export const ping = async (req, res) => {
    const [result] = await pool.query("SELECT 'pong' AS result");
    res.json(result[0]);
  }

export const index = async (req, res) => {
    res.send("HOLA")
  }

  export const indexParams = async (req, res) => {
    res.send("indexParams")
  }