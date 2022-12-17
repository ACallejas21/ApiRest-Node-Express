import { Router } from "express";

import {ping, index} from '../controllers/index.controller.js'

const router = Router();

router.get("/", index)

router.get("/ping", ping);

export default router;
