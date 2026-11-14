import  { Router } from "express";
import {savePastedMaterials , saveLinkMaterial} from "../controllers/material.controller.js";
const router = Router();

router.post("/paste", savePastedMaterials);
router.post("/link",saveLinkMaterial);


export default router;