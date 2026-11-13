import  { Router } from "express";
import {savePastedMaterials} from "../controllers/material.controller.js";
const router = Router();

router.post("/paste", savePastedMaterials);


export default router;