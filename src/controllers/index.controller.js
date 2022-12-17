import { pool } from "../db.js";
export const ping = async (req, res) => {
    const [result] = await pool.query("SELECT 'pong' AS result");
    res.json(result[0]);
  }

export const index = async (req, res) => {
    res.send("HOLA")
  }

  export const indexParams = async (req, res) => {

    console.log(req.query.nombre);

    // const mykeyParams = window.location.search
    // const urlparams = new URLSearchParams(mykeyParams)
    //console.log(urlparams);
    res.send("indexParams")
  }