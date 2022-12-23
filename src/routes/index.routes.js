import { Router } from "express";

import {ping, index, indexParams, login, post} from '../controllers/index.controller.js'
import VerifiJWT from "../utils/verifyJWT.js";

const router = Router();

router.get("/", index)
router.get("/params", indexParams)

router.get("/ping", ping);

router.post("/login", login);
router.post('/post',VerifiJWT, post)

export default router;
