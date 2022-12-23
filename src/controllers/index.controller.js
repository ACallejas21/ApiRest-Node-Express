import { pool } from "../db.js";
import jwt from  'jsonwebtoken'
// const jwt = require("jsonwebtoken")
export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 'pong' AS result");
  res.json(result[0]);
};

export const index = async (req, res) => {
  res.json(
    "Documentacion: https://documenter.getpostman.com/view/13157209/2s8YzZNdzM"
  );
};

export const indexParams = async (req, res) => {
  console.log(req.query.nombre);

  // const mykeyParams = window.location.search
  // const urlparams = new URLSearchParams(mykeyParams)
  //console.log(urlparams);
  res.send("indexParams");
};

export const login =  (req, res) => {
  const user = {
    id: 1,
    nombre: "Akdiel",
    email: "Akdiel@akdiel.com",
  };
//configuración del token y la fecha de expiración
  jwt.sign({user}, 'secretkey', {expiresIn: '32s'},(error, token) => {
    res.json({
      token,

    })
  })  
};

export const post  = (req,res) => {

  jwt.verify(req.token , 'secretkey', (error, authData) => {
    if (error) {
      res.sendStatus(403);
    }else{
      res.json({
        mensaje: 'Post fue creado',
        authData
      })
    }
  })
}


