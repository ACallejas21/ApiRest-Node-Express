import { Router } from "express";

import {ping, index, indexParams} from '../controllers/index.controller.js'

const router = Router();

router.get("/", index)
router.get("/params", indexParams)

router.get("/ping", ping);

export default router;
